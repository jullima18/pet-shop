const petForm = document.getElementById('petForm');

petForm.addEventListener('submit',async(e)=>{
    e.preventDefault();

    const formData = new  FormData();
    formData.append('tutor',document.getElementById('tutor').Value.trim());
     formData.append('nome-pet',document.getElementById('nomepet').Value.trim());
     formData.append('raca',document.getElementById('raca').Value.trim());
     formData.append('genero',document.getElementById('genero').Value.trim());
     formData.append('peso',document.getElementById('peso').Value.trim());
     formData.append('idade',document.getElementById('idade').Value.trim());
     
     const imageminput = document.getElementById('imagem');

     if(imageminput.files[0]){
        formData.append('imagem',imageminput.files[0]);
     }



     try {
         const response = await fetch ('http://localhost:3000/api/pets', {

            method: 'POST',
            body: formData,
        
        });
     } catch (error) {
        
     }

     const data = await response.json();

     if (response.ok){
        alert(data.message);
        petForm.reset();
     }else{
        alert(data.message);
     }
})
