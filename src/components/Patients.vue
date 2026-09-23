<script setup>
import {ref} from 'vue'

const patients = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        phone: "0712345678",
        residence: "123, Main Street",
        nationalId: "12345678",
        dob: "1995-04-03"
    },
    {
        id: 2,
        firstName: "James",
        lastName: "Kim",
        email: "jameskim@gmail.com",
        phone: "0712345677",
        residence: "321, Main Street",
        nationalId: "12345677",
        dob: "1997-07-07"
    },
    {
        id: 3,
        firstName: "Richard",
        lastName: "Him",
        email: "richardhim@gmail.com",
        phone: "0712345676",
        residence: "126, Main Street",
        nationalId: "12345676",
        dob: "1996-06-06"
    },
    {
        id: 4,
        firstName: "Boni",
        lastName: "Ramcy",
        email: "boniramcy@gmail.com",
        phone: "0712345675",
        residence: "125, Main Street",
        nationalId: "12345675",
        dob: "1995-05-05"
    }
]

const showAddDialog = ref (false)

</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>Patients</h1>
            </v-col>
            <v-col md="2">
                <v-btn class="ma-2" color="primary" icon="mdi-plus" @click="showAddDialog = true"></v-btn>
            </v-col>
        </v-row>

        
        <v-row>
            <v-col>
                <v-table class="border">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Residence</th>
                        <th>National ID</th>
                        <th>Date of Birth</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in patients">
                            <td>{{ item.firstName + item.lastName }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.residence }}</td>
                            <td>{{ item.nationalId }}</td>
                            <td>{{ item.dob }}</td>
                            <td>{{ item.action }}</td>
                            <td>
                                <v-btn color="warning" size="small">
                                    <v-icon icon="mdi-eye"></v-icon>
                                    View
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </v-container>
        <!-- Add patient -->
         <v-dialog v-model="showAddDialog" max-width="50%">
        <v-form>
            <v-card>
                <v-row>
                    <v-card-text>Add Patient</v-card-text>
                    <v-spacer></v-spacer>
                    <v-btn class="ma-2" color="primary" icon="mdi-close" @click="showAddDialog = false"></v-btn>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="First Name" outlined></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Last Name" outlined></v-text-field>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="6">
                        <v-text-field label="Phone" outlined></v-text-field>
                    </v-col>
                    <col md="6">
                        <v-text-field label="Email" outlined></v-text-field>
                        </col>
                    </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Residence" outlined></v-text-field>
                    </v-col>
                    <v-col md="6"></v-col>
                        <v-text-field label="National Id" outlined></v-text-field>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Date of Birth" outlined></v-text-field>
                        </v-col>
                </v-row>
            </v-card>
        </v-form>
    </v-dialog>
</template>