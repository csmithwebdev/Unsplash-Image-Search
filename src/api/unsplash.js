import axios from 'axios';

export default axios.create({
baseURL: 'https://api.unsplash.com',
headers: {
	Authorization: 'Client-ID F9lC6uO4SI_iVi-SSFT5neUhatCHp5gk2d5vAZEOwDs' //specific to unsplash authorization. client id and api key.
	
	}
});
