<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\UserType;
Use App\Entity\User;
use App\Entity\Experience;
use Doctrine\Common\Collections\ArrayCollection;

class DefaultController extends AbstractController
{
    /**
     * @Route("/default", name="default")
     *
     */
    public function index(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $user = new User();
        $form = $this->createForm(UserType::class, $user);

        $experience = new Experience();
        $experience->setTitle('Developer');
        $experience->setLocation('Morocco');
        $experience->setDateFrom(new \DateTime());        
        $experience->setDateTo(new \DateTime());
        $experience->setUser($user);

        $user->addExperience($experience);

        $form = $this->createForm(UserType::class, $user);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($user);
            $em->flush();
        }

        
        return $this->render('default/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="update")
     *
     */
    public function update(Request $request, User $user)
    {
        $em = $this->getDoctrine()->getManager();

        $form = $this->createForm(UserType::class, $user);

        $experience = new Experience();
        $experience->setTitle('Developer');
        $experience->setLocation('Morocco');
        $experience->setDateFrom(new \DateTime());        
        $experience->setDateTo(new \DateTime());
        $experience->setUser($user);

        $user->addExperience($experience);

        //originalExperiences
        $originalExp = new ArrayCollection();

        foreach($user->getExperience() as $exp) {
            $originalExp->add($exp); 
        }

        $form = $this->createForm(UserType::class, $user);

        $form->handleRequest($request);        


        if ($form->isSubmitted() && $form->isValid()) {
            //get rid og the ones that the user got rid of in the Interdace (DOM)
            foreach($originalExp as $exp) {
                //check if the exp is in the $user->getExp()
                if ($user->getExperience()->contains($exp) == false) {
                    $em->remove($exp);
                }
            }

            $em->persist($user);
            $em->flush();
        }

        
        return $this->render('default/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
