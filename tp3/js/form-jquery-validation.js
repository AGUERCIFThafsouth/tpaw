$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready...!" );
     
    
     
     $("#valider").on("click",function(event) {
         event.preventDefault();
         if($('#inputNom').val() == 0 && $('#inputPrenom').val() == 0 && $('#inputDate').val() == 0 && $('#inputPassword3').val() == 0 && $('#inputAdresse').val() == 0 && $('#inputMail').val() == 0)
           { $('.modal-header').text("Veuillez remplir tous les champs s'il vous plait");
            $('#myModal').modal("show");}
        else { 
            $('.modal-header').text(" Bienvenue " + $("#inputNom").val());
            $('.txt').text(" vous etes née en  " + $("#inputDate").val() + "et vous habitez a ");
            $('.image').html('<img src="https://maps.googleapis.com/maps/api/staticmap?markers=paris&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"></img>');
            $("#lien").text($("#inputAdresse").val());
            $('#myModal').modal("show");

            };
     
    });
     
     // Y mettre le code jQuery pour valider tous les champs du formulaire
 });