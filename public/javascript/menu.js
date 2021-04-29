document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });


  function change_lang(lang){
    let caminho = window.location.href;
    let endereco = third_ocorrence(caminho, '/', 3);
    let end = caminho.slice(endereco);
    let start = caminho.slice(0, endereco)
    let linkpt
    if(lang !== "pt"){
        linkpt = start + `/${lang}` + end;
    }
    else{
        linkpt = start + "" + end;
    }
    location.href = linkpt;
  }


  function third_ocorrence(link, char, nth){
    let first_ocorrence = link.indexOf(char);
    let lenght_upto_first = first_ocorrence + 1;

    
    if(nth == 1){
        return first_ocorrence;
    }else{
        let remainer_of_link = link.slice(lenght_upto_first); 
        let next_ocorrence = third_ocorrence(remainer_of_link, char, nth - 1);
        if(next_ocorrence === -1){
            return -1;
        }else{
            return lenght_upto_first + next_ocorrence;
        }
    }
  }