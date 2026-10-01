const petForm = document.getElementById('petForm');

petForm.addEventListener('submit',async(e)=>{
    e.preventDefault();

    const formData = new  FormData();
     formData.append('tutor',document.getElementById('tutor').value.trim());
     formData.append('nome_pet',document.getElementById('nomePet').value.trim());
     formData.append('raca',document.getElementById('raca').value.trim());
     formData.append('genero',document.getElementById('genero').value);
     formData.append('peso',document.getElementById('peso').value);
     formData.append('idade',document.getElementById('idade').value);
     
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
