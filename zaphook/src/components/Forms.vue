<template>
    <div class="container">
        <div class="column">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Testing</h1>

                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label>Name</label>
                        <div class="control">
                            <input v-model="formData.name" type="text" name="name" class="input" required>
                        </div>
                    </div>

                    <div class="field">
                        <label>Company Name</label>
                        <div class="control">
                            <input v-model="formData.company" type="text" name="company" class="input" required>
                        </div>
                    </div>

                    <div class="field">
                        <label>Feedback</label>
                        <div class="control">
                            <input v-model="formData.details" type="text" name="details" class="input" required>
                        </div>
                    </div>

                    <div class="field">
                        <label>Date</label>
                        <div class="control">
                            <input v-model="formData.date" type="date" name="date" class="input" required>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button type="submit" class="button is-success">Submit</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Forms',
    data() {
        return {
            formData: {
                name: '',
                company: '',
                details: '',
                date: '',
            },
        };
    },
    methods: {
  async submitForm() {
    const webhookURL = 'https://hooks.zapier.com/hooks/catch/11189691/2r0qe7x/';
    const formData = new URLSearchParams();
    formData.append('name', this.formData.name);
    formData.append('company', this.formData.company);
    formData.append('details', this.formData.details);
    formData.append('date', this.formData.date);

    try {
      const response = await axios.post(webhookURL, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  },
},

};
</script>
