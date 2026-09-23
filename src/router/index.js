import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import LandingPage from '@/components/landingPage.vue'
import Login from '@/components/Login.vue'
import SignUp from '@/components/Signup.vue'
import Patients from '@/components/Patients.vue'
import ViewPatients from '@/components/ViewPatients.vue'
import Profile from '@/components/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  { 
    path: '/homepage',
    component: HomePage
  },
  { 
    path: '/',
    component: LandingPage
  },
  { 
    path: '/login',
    component: Login
  },
  { 
    path: '/patients',
    component: Patients
  },
  { 
    path: '/profile',
    component: Profile
  },
  { 
    path: '/signup',
    component: SignUp
  },
  { 
    path: '/viewpatients',
    component: ViewPatients
  },
  ],
})

export default router
