export const LoadData = ()=>{
    const URL = "http://api.data.gov.in/resource/37670b6f-c236-49a7-8cd7-cc2dc610e32d?format=json&api-key=505ae47778794592cdf64d8ff7ee62fd";
    return fetch(URL);
};
