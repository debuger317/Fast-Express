import axios from 'axios';

export const fetchAuth = async() => {
        try {
          await axios.get('https://fastexpress.herokuapp.com/api/auth/all');

        } catch (error) {
            console.error(error);
        }
    }

export const fetchCategory = () => {

}

export const fetch_Company = () => {

}

export const fetch_Orderlist = () => {

}

export const fetch_dashboard_data = () => {

}

export const fetch = () => {

}

export const fetchAut = () => {

}

export const fetchAth = () => {

}