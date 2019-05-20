<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\UserType;
Use App\Entity\User;
use App\Entity\Experience;

class DefaultController extends AbstractController
{
    /**
     * @Route("/default", name="default")
     *
     */
    public function index(Request $request)
    {
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
        }

        
        return $this->render('default/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
