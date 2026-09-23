<script setup>

</script>
<template>
    <h1>Landing Page</h1>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle hide-delimiters>
                    <v-carousel-item src="/images/carousel1.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/carousel2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/carousel3.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>


    <!-- About us -->
     <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-card align="center">
                    <v-card-title>Welcome to the NovaHeal Hospital</v-card-title>
                    <v-card-text class="text-body-large">NovaHeal Hospital is a modern healthcare facility dedicated to providing quality, compassionate, and affordable medical care.</v-card-text>
                    <v-card-text class="text-body-large"> Our skilled healthcare professionals and modern facilities ensure every patient receives personalized attention in a safe and welcoming environment. At NovaHeal Hospital, we are committed to promoting healthier lives and delivering trusted healthcare services every day.</v-card-text>
                </v-card>
            </v-col>
        </v-row>
     </v-container>

     <!-- clinics -->
      <v-container max-width="100%">
        <v-row>
            <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/clinic/clinic1.jpeg"></v-img>
                    <v-card-title>ENT Clinic</v-card-title>
                    <v-card-text>Our ENT Clinic provides specialized care for ear, nose, and throat conditions. Our experienced medical team offers thorough examinations, diagnosis, and treatment. We help manage conditions such as ear infections, sinus problems, allergies, and throat disorders. Patients receive personalized care in a comfortable and welcoming environment. Visit our ENT Clinic today and take the first step toward better ear, nose, and throat health.</v-card-text>
                    <v-btn class="ma-4">Learn more</v-btn>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/clinic/clinic2.jpg"></v-img>
                    <v-card-title>Eye Clinic</v-card-title>
                    <v-card-text>Our Eye Clinic provides quality eye care for patients of all ages. We offer comprehensive eye examinations, diagnosis, treatment, and vision care. Our team helps manage common eye problems and provides professional guidance for healthy vision. We are committed to providing friendly, reliable, and patient-centered services. Book your eye examination today and give your vision the care it deserves.</v-card-text>
                    <v-btn class="ma-4">Learn more</v-btn>
                </v-card>
            </v-col>


             <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/clinic/clinic3.jpg"></v-img>
                    <v-card-title>Surgical Clinic</v-card-title>
                    <v-card-text>Our Surgical Clinic provides professional assessment and care for patients requiring surgical services. Our skilled medical team ensures every patient receives careful evaluation and personalized attention. We provide pre-surgical consultations, surgical care, and follow-up services. Patient safety, comfort, and quality care are at the heart of our services. Visit our Surgical Clinic for trusted guidance and professional surgical care.</v-card-text>
                    <v-btn class="ma-4">Learn more</v-btn>
                </v-card>
            </v-col>
            
             <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/clinic/clinic4.png"></v-img>
                    <v-card-title>Urology Clinic</v-card-title>
                    <v-card-text>Our Urology Clinic provides specialized care for urinary and male reproductive health conditions. Our experienced team offers confidential consultations, diagnosis, treatment, and follow-up care. We manage conditions affecting the kidneys, bladder, urinary tract, and reproductive system. Every patient receives respectful, personalized, and professional care.
Book an appointment today and take a positive step toward better urological health.</v-card-text>
                    <v-btn class="ma-4">Learn more</v-btn>
                </v-card>
            </v-col>
        </v-row>
      </v-container>

      <!-- footer -->
       <v-container max width="100%" class="mt-6 bg-secondary">
        <v-row>
            <v-col md="4">
        <v-card>
            <v-card-title>Subscribe to our mailing list</v-card-title>
            <v-card-text>Get the latest news, health tips, and hospital updates delivered to your inbox.</v-card-text>
            <v-text-field v-model="inputValue" label="Email address" outlined class="ma-4">
            <template v-slot:append-inner>
            <v-btn color="primary">Subscribe</v-btn>
            </template>
        </v-text-field>
        <div class="text-center">
            <p>Follow us on:</p>
            <v-icon icon="mdi-instagram"></v-icon>
            <v-icon icon="mdi-twitter"></v-icon>
            <v-icon icon="mdi-facebook"></v-icon>
        </div>
        </v-card>
        </v-col>
        <v-col md="4">//md about coloumn
            <v-card height="300px" color="secondary" flat>
                <v-card-title>Contact Information</v-card-title>
                <v-card-text>
                    <p>
                        <v-icon icon="mdi-map-market=radius-outline"></v-icon>
                        The NovaHeal Hospital
                    </p>
                    <p>
                        <v-icon icon="mdi-phone-outline"></v-icon>
                        +254712345678
                    </p>
                    <p>123, Main Street Madaraka, Nairobi</p>
                    <p>
                        <v-icon icon="mdi-email-outline"></v-icon>
                        info@Madarakahospital.com
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col>
            <v-card height="300px" color="secondary" flat>
                <v-card-title>Quick Links</v-card-title>
                <v-card-text>About us</v-card-text>
                <v-card-text>Clinics</v-card-text>
                <v-card-text>Find a Doctor</v-card-text>
                <v-card-text>News and Events</v-card-text>
            </v-card>
        </v-col>
    </v-row>
       </v-container>
</template>