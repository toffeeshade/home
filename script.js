/*
____ _  _    _    ____ ____ ___  _ _  _ ____ 
|___  \/     |    |  | |__| |  \ | |\ | | __ 
|    _/\_    |___ |__| |  | |__/ | | \| |__] 

import $ from 'https://code.jquery.com/jquery-3.7.0.js'; 
*/

function loadPage() {
    const h2intro = document.getElementById('h2intro');
    const h2introHeight = h2intro.offsetHeight;
  
    document.documentElement.style.setProperty('--h2intro-height', `${h2introHeight}px`);
  
    const loadingDuration = 5000;
    const intervalDuration = 10;
  
    $(document).ready(function () {
  
      const h2intro = document.getElementById('h2intro');
      const h2introHeight = h2intro.offsetHeight;
  
      document.documentElement.style.setProperty('--h2intro-height', `${h2introHeight}px`);
  
  
      var loadingDuration = 5000;
      var intervalDuration = 10;
  
        jQuery(function($) {
          var loading = $('#loading');
          var blackRectangle = $('#blackRectangle');
          var glitchText = $('#glitchText');
          var whiteScreen = $('#whiteScreen');
  
          var intervalsCount = loadingDuration / intervalDuration;
          var increment = 100 / intervalsCount;
  
          var intervalId = setInterval(function() {
              var currentHeight = blackRectangle.height();
              var newHeight = currentHeight + increment;
  
              if (newHeight > 100) newHeight = 100;
  
              blackRectangle.css('height', newHeight + '%');
  
              if (newHeight === increment && glitchText.css('opacity') == 0) {
                  glitchText.css('opacity', 1);
                  matrixing(glitchText[0]);
              }
  
              if (newHeight >= 100) {
                clearInterval(intervalId);
              
                setTimeout(function() {
                    blackRectangle.css('bottom', '100%');
                    whiteScreen.css('opacity', 0);
  
                    glitchText.css({
                        transition: 'font-size 2s, opacity 0.3s',
                        fontSize: '8em',
                        opacity: 0
                    });
                }, 2000);
  
                setTimeout(function() {
                  whiteScreen.remove();
                  $('#servicesBlock').css('bottom', '0%'); // use .css instead of .animate
                  loading.remove();
              }, 2600);
  
  
            }
  
          }, intervalDuration);
      });
  
    });
  }
  
  
  
  /*
  ____ _  _ ___  _ _  _ ____ 
  |___ |\ | |  \ | |\ | | __ 
  |___ | \| |__/ | | \| |__] 
  */
  function leavingPage() {
    let rectangles = Array.from(document.getElementsByClassName('overlay-rectangle'));
    
    // Start the white rectangle moving first
    rectangles[rectangles.length - 1].style.transition = `top 2s`;
    rectangles[rectangles.length - 1].style.top = '0';
    
    // Start each black rectangle moving after a delay
    for (let i = 0; i < rectangles.length - 1; i++) {
      setTimeout(function() {
        rectangles[i].style.transition = `top 3s`;
        rectangles[i].style.top = '100vh';
      }, 500 * i);  // Delay each rectangle by 0.5s
    }
  }
  
  
  function endPage() {
    let links = document.getElementsByClassName('leaving');
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(event) {
        event.preventDefault();
        let href = this.getAttribute('href');
        leavingPage();
        setTimeout(function() {
          window.location.href = href;
        }, 5000);
      });
    }
  }
  
  
  /*
  _   _ ____ _  _ ___ _  _ ___  ____ 
   \_/  |  | |  |  |  |  | |__] |___ 
    |   |__| |__|  |  |__| |__] |___ 
  */
  
  const loadScript = (url, callback) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
  
    if (script.readyState) {  // Pour Internet Explorer
      script.onreadystatechange = function() {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  // Pour les autres navigateurs
      script.onload = callback;
    }
  
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };
  
  const playerSettings = {
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 0,
      modestbranding: 1
    }
  };
  
  const createPlayer = (id, videoId, onReady) => {
    return new YT.Player(id, {
      ...playerSettings,
      videoId,
      host: 'https://www.youtube.com', 
      events: {
        onReady
      }
    });
  }
  
  let secretYT, haproYT;
  
  const onsecretYTReady = (event) => {
    event.target.cueVideoById('_85LaeTCtV8');
  }
  
  const onhaproYTReady = (event) => {
    event.target.cueVideoById('OIeNgHP_-WE');
  }
  
  window.onYouTubeIframeAPIReady = function() {
    secretYT = createPlayer('secretYoutube', '_85LaeTCtV8', onsecretYTReady);
    haproYT = createPlayer('haproYoutube', 'OIeNgHP_-WE', onhaproYTReady);
  }
  
  loadScript("https://www.youtube.com/iframe_api", () => {});
  
  
  
  /* 
  _    ____ ____ ____    _ _ _ ____ _    _  _ ____ ____ ____ 
  |    |  | | __ |  |    | | | |__| |    |_/  |___ |__/ [__  
  |___ |__| |__] |__|    |_|_| |  | |___ | \_ |___ |  \ ___] 
  */
  
  function animateLogos() {
      var sociaLogos = ["#linkedin", "#github", "#artstation", "#gmail"];
    
      sociaLogos.forEach(function(sociaLogo) {
        var $logo = $(sociaLogo + " a");
    
        function animateLogo() {
          var newPosition = makeNewPosition($logo);
    
          $logo.animate({
            top: newPosition[0],
            left: newPosition[1]
          }, 18000, function() {
            animateLogo();
          });
        };
    
        animateLogo();
      });
    
      function makeNewPosition($logo) {
        // Get the dimensions of the container
        var h = $logo.parent().height() - $logo.height();
        var w = $logo.parent().width() - $logo.width();
    
        // Generate a random new position within the bounds of the container
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
    
        return [nh, nw];
      }
  };
  
  
  /*
  ____ _  _    ____ ____ _   _ ___  ___ ____    ___ ____ _  _ ___ 
  |___  \/     |    |__/  \_/  |__]  |  |  |     |  |___  \/   |  
  |    _/\_    |___ |  \   |   |     |  |__|     |  |___ _/\_  |  
  
  */
  
  const buttons = document.querySelectorAll('.matrixed');
  
  buttons.forEach((button) => {
    let intervalTime = 50;
    let delayTime = 20;
    let loopTimes = 2;
    const originalText = button.textContent;
    let decryptInterval;
  
    if(button.classList.contains('x2')) {
      intervalTime /= 2;
      delayTime /= 2;
      loopTimes *= 2;
    }
  
    if(button.classList.contains('x4')) {
      intervalTime /= 4;
      delayTime /= 4;
      loopTimes *= 4;
    }
  
    if(button.classList.contains('x8')) {
      intervalTime /= 8;
      delayTime /= 8;
      loopTimes *= 8;
    }
  
    function matrixing() {
      if (decryptInterval) {
        clearInterval(decryptInterval);
      }
  
      const decryptedText = button.dataset.originalText || button.textContent;
      button.textContent = '_';
  
      let decryptedIndex = 0;
      let loopCounter = 0;
  
      decryptInterval = setInterval(() => {
        if (loopCounter < loopTimes) {
          setTimeout(() => {
            const encryptedChar = getRandomChar();
            button.textContent = button.textContent.slice(0, -1) + encryptedChar;
          }, delayTime);
          loopCounter++;
        } else if (decryptedIndex < decryptedText.length) {
          button.textContent = button.textContent.slice(0, -1);
          const decryptedChar = decryptedText[decryptedIndex];
          button.textContent += decryptedChar;
          button.textContent += "█";
          decryptedIndex++;
          loopCounter = 0;
        } else {
          button.textContent = button.textContent.slice(0, -1);
          clearInterval(decryptInterval);
          button.textContent = originalText;
        }
      }, intervalTime);
    }
  
    if(button.classList.contains('triggered')) {
      matrixing();
    }
  
    // Uncomment to replay the animation anytime you're on the text
    // button.addEventListener('mouseenter', () => {
    //   matrixing();
    // });
  
    button.addEventListener('mouseleave', () => {
        if (isMobile()) return;
      matrixing();
    });
  });
    
    
    
    
  // Select all elements with the class "auto-matrix"
  const autoMatrixButtons = document.querySelectorAll('.auto-matrix');
  
  // Iterate over each selected button
  autoMatrixButtons.forEach((button) => {
    // Adjustable variables
    let intervalTime = 50;  // Time for interval
    let delayTime = 20;     // Time delay for setTimeout
    let loopTimes = 2;      // Number of times the loop will run
  
    // Original text of the button
    const originalText = button.textContent;
  
    // Variable to hold the interval instance
    let decryptInterval;
  
    // Apply multipliers based on classes present in the button
    if(button.classList.contains('x2')) {  // If class 'x2' is present
      intervalTime /= 2;  // Halve the intervalTime
      delayTime /= 2;     // Halve the delayTime
      loopTimes *= 2;     // Double the loopTimes
    }
  
    if(button.classList.contains('x4')) {  // If class 'x4' is present
      intervalTime /= 4;  // Quarter the intervalTime
      delayTime /= 4;     // Quarter the delayTime
      loopTimes *= 4;     // Quadruple the loopTimes
    }
  
    if(button.classList.contains('x8')) {  // If class 'x8' is present
      intervalTime /= 8;  // Divide intervalTime by 8
      delayTime /= 8;     // Divide delayTime by 8
      loopTimes *= 8;     // Multiply loopTimes by 8
    }
  
    function autoMatrix() {
      // If there's already an interval running, clear it
      if (decryptInterval) {
        clearInterval(decryptInterval);
      }
  
      // Get the original text data attribute if exists, else get current textContent
      const decryptedText = button.dataset.originalText || button.textContent;
  
      // Start the textContent as '_'
      button.textContent = '_';
  
      // Initial variables for the decryption process
      let decryptedIndex = 0;
      let loopCounter = 0;
  
      // Start an interval with the adjusted intervalTime
      decryptInterval = setInterval(() => {
        // If the loopCounter is less than the adjusted loopTimes
        if (loopCounter < loopTimes) {
          // Delay the execution of the function inside setTimeout by delayTime
          setTimeout(() => {
            const encryptedChar = getRandomChar();  // Get a random character
            // Replace the last character of the textContent with the random character
            button.textContent = button.textContent.slice(0, -1) + encryptedChar;
          }, delayTime);
          loopCounter++;
        } 
        // If the decrypted index is less than the length of the decryptedText
        else if (decryptedIndex < decryptedText.length) {
          // Remove the last character from the textContent
          button.textContent = button.textContent.slice(0, -1);
  
          // Get the decrypted character from the decryptedText by index
          const decryptedChar = decryptedText[decryptedIndex];
  
          // Append the decrypted character and '█' to the textContent
          button.textContent += decryptedChar;
          button.textContent += "█";
  
          // Increase the decrypted index and reset the loop counter
          decryptedIndex++;
          loopCounter = 0;
        } 
        // If the entire decryptedText has been processed
        else {
          // Remove the last character from the textContent
          button.textContent = button.textContent.slice(0, -1);
  
          // Clear the running interval and restore the original text
          clearInterval(decryptInterval);
          button.textContent = originalText;
        }
      }, intervalTime);
    }
  
    // Start the decryption process
    autoMatrix();
  });
  
  
  function getRandomChar() {
    const chars = 'Σ_—t0FfΣΣ5h4DΣ';
    const randomIndex = Math.floor(Math.random() * chars.length);
    return chars[randomIndex];
  }
  
  
  
  
  
  
  /*
  ____ ____ ____ ___  
  |    |__| |__/ |  \ 
  |___ |  | |  \ |__/ 
  
  import $ from 'https://code.jquery.com/jquery-3.7.0.js'; 
  */
  
  $(document).ready(function() {
      $(".card").on({
        mousemove: function(e) {
            if (isMobile()) return;
          const card = this;
          const glowElement = card.querySelector('.glowMou, .glowMouCrea, .glowMouTech');
          
          const cardRect = card.getBoundingClientRect();
          
          const offsetX = e.clientX - cardRect.left;
          const offsetY = e.clientY - cardRect.top;
    
          const diffX = (cardRect.width / 2) - offsetX;
          const diffY = (cardRect.height / 2) - offsetY;
    
          const rotateY = (8 * diffX) / (cardRect.width / 2);
          const rotateX = (8 * diffY) / (cardRect.height / 2);
          
          const invertRotateX = -rotateX;
    
          card.style.transform = `rotateX(${invertRotateX}deg) rotateY(${rotateY}deg)`;
    
          glowElement.style.setProperty('--mouse-x', `${offsetX}px`);
          glowElement.style.setProperty('--mouse-y', `${offsetY}px`);
          glowElement.classList.add("glowing");
        },
        mouseleave: function() {
          const card = this;
          card.style.transform = "";
    
          const glowElement = card.querySelector('.glowMou, .glowMouCrea, .glowMouTech');
          glowElement.classList.remove("glowing");
        }
      });
    });
  
  
  
  /*
  _  _ ____ _  _    _  _ ____ _  _ ___  _    ____ ____ 
  |\ | |__| |  |    |__| |__| |\ | |  \ |    |___ |__/ 
  | \| |  |  \/     |  | |  | | \| |__/ |___ |___ |  \ 
  
  import $ from 'https://code.jquery.com/jquery-3.7.0.js'; 
  import $ from 'jquery';
  */
  
  function handleNavItems() {
  // Cachez tous les contenus de projet au démarrage, sauf le contact
  $(".creaProjectContent").hide();
  $("#contactMeContent").show();
  
  // Cachez toutes les descriptions de projet et les menus .creaSubNav
  $(".projectDescription").hide();
  $(".creaSubNav").hide();
  
  // Ajoutez un gestionnaire d'événements click à chaque élément .creaProject
  $(".creaProject").on('click', function(event) {
    event.stopPropagation(); // Empêche l'événement de remonter jusqu'au .creaNavItem
    // Récupérez l'ID de l'élément sur lequel vous avez cliqué
    var id = $(this).attr('id');
    // Construisez l'ID du contenu correspondant
    var contentId = '#' + id + 'Content';
  
    // Cachez ou affichez la description du projet pour l'élément sur lequel vous avez cliqué
    $(this).children(".projectDescription").slideToggle("slow");
  
    // Cachez tous les contenus de projet
    $(".creaProjectContent").hide();
  
    // Affichez le contenu correspondant à l'élément sur lequel vous avez cliqué
    $(contentId).show();
  });
  
  // Ajoutez un gestionnaire d'événements click à chaque élément .creaNavItem
  $(".creaNavItem").on('click', function() {
    // Cachez ou affichez les enfants .creaSubNav lorsqu'un .creaNavItem est cliqué
    $(this).children(".creaSubNav").slideToggle("slow");
  });
  };
  
  
  let pocketCC;
  let originalDescriptions = [];
  let contentsModified = false;
  let resizeTimeout;
  
  function swapping() {
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      var width = window.innerWidth;
  
    var swapElements = document.querySelectorAll('.swap');
    var projectDescriptions = document.querySelectorAll('.projectDescription');
    pocketCC = document.getElementById('crea2'); 
    pocketCC.style.transition = 'opacity 0.3s ease, transform 0.3s ease'; 
  
    if (width >= 0 && width <= 900) {
      for (let i = 0; i < swapElements.length; i++) {
        let correspondingProjectDescription = [...projectDescriptions].find(pd => pd.classList.contains(swapElements[i].classList.item(1)));
        if (correspondingProjectDescription) {
          // Stocker le contenu original de projectDescription si ce n'est pas déjà fait
          if (!originalDescriptions[i]) {
            originalDescriptions[i] = correspondingProjectDescription.innerHTML;
          }
          // Déplacer le contenu de swap vers projectDescription
          correspondingProjectDescription.innerHTML = swapElements[i].innerHTML;
        }
      }
      // Cacher l'élément crea2
      if (pocketCC) {
        pocketCC.style.opacity = '0';
        pocketCC.style.transform = 'scale(0.8)';
      }
      // Indiquer que le contenu a été modifié
      contentsModified = true;
    } else if (contentsModified) {
      // Montrer l'élément crea2 s'il a été caché
      if (pocketCC) {
        pocketCC.style.opacity = '1';
        pocketCC.style.transform = 'scale(1)';
      }
      // Réinitialiser le contenu des éléments projectDescription
      for (let i = 0; i < projectDescriptions.length; i++) {
        if (originalDescriptions[i]) {
          projectDescriptions[i].innerHTML = originalDescriptions[i];
        }
      }
      // Réinitialiser le tableau originalDescriptions et l'indicateur contentsModified
      originalDescriptions = [];
      contentsModified = false;
    }
  },8); 
  });
  }
  
  
  
  /* 
  _  _ ____ _  _ ____ ____ 
  |\/| |  | |  | [__  |___ 
  |  | |__| |__| ___] |___ 
  */
  
  
  let mouseX = 0, mouseY = 0, lastMouseX = 0, lastMouseY = 0, speedX = 0, speedY = 0;
  let posX = 0, posY = 0, size = 28, opacity = 1;
  let targetSize = 28, targetOpacity = 1;
  let isRectangle = false, isScrollFastActivated = false;
  let rotation = 0;
  let animateRotation = false;
  
  const customPointer = document.getElementById('customPointer');
  
  function isMobile() {
    return (window.matchMedia("only screen and (max-width: 760px)").matches);
  }
  

function animouse() {
    if (isMobile()) return;
  const factor = isScrollFastActivated || (opacity < 0.1 && targetOpacity < 0.1) ? 0.05 : 0.5;
  posX += (mouseX - posX) * factor;
  posY += (mouseY - posY) * factor;
  size += (targetSize - size) * factor;
  opacity += (targetOpacity - opacity) * factor;
  
  if (animateRotation) {
    rotation += 6; 
    if (rotation >= 360) {
      rotation = 0;
      animateRotation = false;
    }
  }
  
  const newSize = Math.max(size, size + Math.sqrt(speedX * speedX + speedY * speedY) / 8);
  const width = newSize + Math.abs(speedX);
  const height = newSize + Math.abs(speedY);
  
  customPointer.style.top = `${posY - newSize/2}px`;
  customPointer.style.left = `${posX - newSize/2}px`;
  customPointer.style.width = `${width}px`;
  customPointer.style.height = `${height}px`;
  customPointer.style.opacity = `${opacity}`;
  customPointer.style.transform = `rotate(${rotation}deg)`;
  
  requestAnimationFrame(animouse);
  }

  if (!isMobile()) {
  document.addEventListener('mousemove', (event) => {
    if (isMobile()) return;
  mouseX = event.clientX;
  mouseY = event.clientY;
  speedX = mouseX - lastMouseX;
  speedY = mouseY - lastMouseY;
  lastMouseX = mouseX;
  lastMouseY = mouseY;
  });
  
  document.addEventListener('mousedown', (event) => {
    if (isMobile()) return;
  if (event.button === 1) {
    isScrollFastActivated = true;
    targetSize = 0;
    targetOpacity = 0;
  }
  });
  
  document.addEventListener('mouseup', (event) => {
    if (isMobile()) return;
  if (event.button === 1) {
    isScrollFastActivated = false;
    targetSize = 28;
    targetOpacity = 1;
  }
  });
  
  document.addEventListener('mouseleave', () => {
    if (isMobile()) return;
  targetSize = 0;
  targetOpacity = 0;
  });
  
  document.addEventListener('mouseenter', () => {
    if (isMobile()) return;
  targetSize = 28;
  targetOpacity = 1;
  });
  
  document.addEventListener('click', () => {
    if (isMobile()) return;
  isRectangle = !isRectangle;
  customPointer.classList.toggle('mouRectangle');
  animateRotation = true;
  });
  
  const clickableElements = document.querySelectorAll('a, button');
  clickableElements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    if (isMobile()) return;
    targetSize = 12;
  });
  element.addEventListener('mouseout', () => {
    if (isMobile()) return;
    targetSize = 28;
  });
});
  animouse();
}

  /*
  ___  ____ ____ ____ _    _    ____ _  _ ____ 
  |__] |__| |__/ |__| |    |    |__|  \/  |___ 
  |    |  | |  \ |  | |___ |___ |  | _/\_ |___ 
  
  */
  
  function glassSolution() {
  var scrollPos = $(window).scrollTop();
  var solutionPos = $("#solution").offset().top;
  
  if (scrollPos < solutionPos) {
  $("#theGlass").css({
    "position": "absolute",
    "top": solutionPos + "px"
  });
  } else {
  $("#theGlass").css({
    "position": "fixed",
    "top": "0"
  });
  }
  }
  
  function scrollSoluNumbers() {
  const soluNumbers = document.querySelectorAll('.soluNumber');
  const soluBackgrounds = document.querySelectorAll('.soluBackground');
  
  const offset = window.scrollY;
  
  soluNumbers.forEach((soluNumber, index) => {
  soluNumber.style.transform = `translateY(${offset / (index + 28)}px)`;
  });
  
  soluBackgrounds.forEach((soluBackground, index) => {
  const bgPosition = `center ${offset / (index - 28)}px`;
  soluBackground.style.backgroundPosition = bgPosition;
  });
  }
  
  
  /*
  _  _ ____ _  _ _  _ 
  |\/| |___ |\ | |  | 
  |  | |___ | \| |__| 
  
  */
  
  //Menu goes up or down when scrolling
  
  let lastScrollTop = 0;
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    stickBanner();
    scrollSoluNumbers();
    glassSolution();
  
    const st = window.scrollY || document.documentElement.scrollTop;
  
    lastScrollTop = st;
  });
  
  
  // Auto scrolling
  
  $(document).ready(function() {
    const scrollingMenu = $('#menu');
    let scrollInProgress = false;
  
    const scrollSpeed = 10000; // set the time to scroll in ms
    const menuScrollSpeed = 1000; // set the time to scroll for menu links in ms
  
    const menu = $('#menu');
  
    $(window).scroll(function() {
        if (isMobile()) return;
      if (!scrollInProgress) {
        scrollingMenu.stop().animate({ top: $(this).scrollTop() > 0 ? '0' : '-50px' }, 300);
      }
    });
  
  
  
  
    $('a.menuOption[href*="#"]').on('click', function(e) {
      e.preventDefault();
      if (scrollInProgress) {
        $('html, body').stop();
        $('#arrowUp, #arrowDown').removeClass('active');
      }
      scrollInProgress = true;
      const target = $($(this).attr('href'))[0];
    
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    
      history.pushState(null, null, ' ');
    
      scrollInProgress = false;
    });
    
    
  
  
    $('#arrowUp').on('click', function() {
      if (!scrollInProgress) {
        scrollInProgress = true;
        $(this).addClass('active');
        $('#arrowDown').removeClass('active');
        const distance = $(window).scrollTop();
        const adjustedSpeed = scrollSpeed * (distance / $(document).height());
        $('html, body').animate({ scrollTop: 0 }, adjustedSpeed, 'linear', function() {
          scrollInProgress = false;
          $('#arrowUp').removeClass('active');
        });
      }
    });
  
    $('#arrowDown').on('click', function() {
      if (!scrollInProgress) {
        scrollInProgress = true;
        $(this).addClass('active');
        $('#arrowUp').removeClass('active');
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();
        const distance = documentHeight - windowHeight - $(window).scrollTop();
        const adjustedSpeed = scrollSpeed * (distance / documentHeight);
        $('html, body').animate({ scrollTop: documentHeight - windowHeight }, adjustedSpeed, 'linear', function() {
          scrollInProgress = false;
          $('#arrowDown').removeClass('active');
        });
      }
    });
  
    $(window).on('wheel touchmove', function() {
      if (scrollInProgress) {
        scrollInProgress = false;
        $('html, body').stop();
        $('#arrowUp, #arrowDown').removeClass('active');
        menu.stop().animate({ top: $(this).scrollTop() > 0 ? '-50px' : '0' }, 300);
      }
    });
    
  
  
    $('#arrowUp, #arrowDown').on('mousedown', function() {
      if (scrollInProgress) {
        scrollInProgress = false;
        $('html, body').stop();
        $('#arrowUp, #arrowDown').removeClass('active');
        menu.stop().animate({ top: $(this).scrollTop() > 0 ? '-50px' : '0' }, 300);
      }
    });
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const items = [
    {
      item: document.querySelector('.flags'),
      banner: document.querySelector('.scrollingBanner .banner'),
      itemClass: 'flags',
      cloneFactor: 1,
      scrollSpeed: 0.5,
      scrollLeft: 0,
      animationId: null
    },
    {
      item: document.querySelector('.flags-text'),
      banner: document.querySelector('.contactBanner .banner'),
      itemClass: 'flags-text',
      cloneFactor: 6,
      scrollSpeed: 0.5,
      scrollLeft: 0,
      animationId: null
    }
  ];
  
  
  
  const gapPixels = 800;
  
  window.addEventListener('resize', () => {
    items.forEach((itemData) => {
      itemData.elements = cloneItems(itemData);
  
      if (itemData.animationId !== null) {
        cancelAnimationFrame(itemData.animationId);
      }
  
      animateItems(itemData);
    });
  });
  
  function cloneItems({item, banner, itemClass, cloneFactor}) {
    const viewportWidth = window.innerWidth;
    const itemWidth = item.offsetWidth;
    const numberOfClones = Math.ceil((2 * viewportWidth * cloneFactor) / (itemWidth + gapPixels));
    let itemElements = document.querySelectorAll(`.${itemClass}`);
  
    Array.from(itemElements).forEach((element) => {
      if (element !== item) {
        element.remove();
      }
    });
  
    for (let i = 0; i < numberOfClones; i++) {
      banner.appendChild(item.cloneNode(true));
    }
  
    return document.querySelectorAll(`.${itemClass}`);
  }
  
  function animateItems({item, banner, elements, scrollSpeed, itemClass}) {
    let scrollLeft = 0;
  
    const animationLoop = () => {
      scrollLeft += scrollSpeed;
  
      Array.from(elements).forEach((element) => {
        element.style.transform = `translateX(-${scrollLeft}px)`;
      });
  
      if (item.getBoundingClientRect().right <= banner.getBoundingClientRect().left) {
        scrollLeft = 0;
      }
  
      requestAnimationFrame(animationLoop);
    };
  
    animationLoop();
  }
  
  // Initial call
  items.forEach((itemData) => {
    itemData.elements = cloneItems(itemData);
    animateItems(itemData);
  });
  
  
  
  
  // Add flags to the menu
  let bannerIsSticky = false; 
  let isInAnimation = false; 
  
  const scrollingBanner = document.querySelector('.scrollingBanner');
  const bannerOriginalParent = scrollingBanner.parentElement; // Keep reference to the original parent
  const creativeSection = document.getElementById('creative'); // Add your creative section ID here
  
  
  function stickBanner() {
    const st = window.scrollY || document.documentElement.scrollTop;
    let isScrollingUp = st < lastScrollTop;
  
    // If we have scrolled beyond the 'creative' section, make the banner 'sticky' and add it to the header
    if (st >= (creativeSection.offsetTop - header.offsetHeight)) {
      if (!bannerIsSticky) { // if the banner was not sticky before and is sticky now
        bannerIsSticky = true;
      }
      scrollingBanner.style.position = 'sticky';
      scrollingBanner.style.top = '0';
      header.appendChild(scrollingBanner);
    } 
    // If we have scrolled back beyond the 'creative' section, return the banner to its original position
    else if (bannerIsSticky && isScrollingUp) {
      bannerIsSticky = false; // reset the flag for next time
      isInAnimation = true;
      header.classList.remove('scroll-down');
      header.classList.add('scroll-up');
      scrollingBanner.classList.add('fxSlideT2B');
  
      setTimeout(() => { 
        header.classList.remove('scroll-up');
        isInAnimation = false;
        scrollingBanner.style.position = 'relative';
        scrollingBanner.style.top = '0px';
        bannerOriginalParent.prepend(scrollingBanner);
        scrollingBanner.classList.remove('fxSlideT2B');
      }, 300); // adjust this time to match your animation time
    }
  
    if (!isInAnimation) {
      if (st > 0 && isScrollingUp) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
      } else if (st > 0 && !isScrollingUp) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
      }
    }
  
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }
  
    /*
  ___  ____   ___    ___  ____ ____ _  _ ____ ____ ____ _  _ _  _ ___  
  ___| |___  |   |   |__] |__| |    |_/  | __ |__/ |  | |  | |\ | |  \ 
  ___| |___| |___|   |__] |  | |___ | \_ |__] |  \ |__| |__| | \| |__/ 
  */
  
    import * as THREE from "https://cdn.skypack.dev/three@0.130.0";
    import { OrbitControls } from "https://cdn.skypack.dev/three@0.130.0/examples/jsm/controls/OrbitControls.js";
    
    
    
    let intro360_scene, intro360_camera, intro360_renderer, intro360_controls, intro360_textureLoader, intro360_sphere1, intro360_sphere2, intro360_material1, intro360_material2;
    const intro360_images = ['./assets/360/sky.jpg', './assets/360/sky2.jpg', './assets/360/sky3.jpg'];
    let intro360_index = 0;
    
  function BG360() {
      // Créer une scène
      intro360_scene = new THREE.Scene();
    
      // Créer une caméra
      intro360_camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      intro360_camera.position.z = 1;
    
      // Créer un renderer
      intro360_renderer = new THREE.WebGLRenderer();
      intro360_renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('intro360').appendChild(intro360_renderer.domElement);
    
      // Créer des contrôles pour gérer les événements de la souris
      intro360_controls = new OrbitControls(intro360_camera, intro360_renderer.domElement);
    
    
      // Créer des contrôles pour gérer les événements de la souris
      intro360_controls = new OrbitControls(intro360_camera, intro360_renderer.domElement);
    
      // Créer un chargeur de texture pour charger nos images
      intro360_textureLoader = new THREE.TextureLoader();
    
      // Créer une sphère
      const geometry = new THREE.SphereGeometry(5, 32, 32);
    
      // Créer les matériaux avec la première texture
      intro360_material1 = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.BackSide, transparent: true, opacity: 1});
      intro360_material2 = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.BackSide, transparent: true, opacity: 0});
      
      intro360_sphere1 = new THREE.Mesh(geometry, intro360_material1);
      intro360_scene.add(intro360_sphere1);
    
      intro360_sphere2 = new THREE.Mesh(geometry, intro360_material2);
      intro360_scene.add(intro360_sphere2);
    
      // Lorsque la fenêtre est redimensionnée
      window.addEventListener('resize', () => {
        // Mettre à jour l'aspect de la caméra
        intro360_camera.aspect = window.innerWidth / window.innerHeight;
        // Mettre à jour la matrice de projection de la caméra
        intro360_camera.updateProjectionMatrix();
        // Mettre à jour la taille du rendu
        intro360_renderer.setSize(window.innerWidth, window.innerHeight);
      }, false);
    
      // Charger la première image
      intro360_loadNextImage();
    
      function intro360_loadNextImage() {
        // Swap spheres and materials
        [intro360_sphere1, intro360_sphere2] = [intro360_sphere2, intro360_sphere1];
        [intro360_material1, intro360_material2] = [intro360_material2, intro360_material1];
    
        intro360_textureLoader.load(intro360_images[intro360_index], function(texture) {
          intro360_material1.map = texture;
          intro360_material1.needsUpdate = true;
          fadeTransition(8000);
        });
    
        // Passer à l'image suivante
        intro360_index = (intro360_index + 1) % intro360_images.length;
    
        // Charger la prochaine image après un délai aléatoire entre 100000 et 130000
        setTimeout(intro360_loadNextImage, Math.random() * 100000 + 130000);
      }
    
      function fadeTransition(duration) {
        const startTime = Date.now();
        const animateFade = function() {
          const elapsed = Date.now() - startTime;
          const progress = elapsed / duration;
          if(progress < 1) {
            intro360_material1.opacity = progress;
            intro360_material2.opacity = 1 - progress;
            requestAnimationFrame(animateFade);
          } else {
            intro360_material1.opacity = 1;
            intro360_material2.opacity = 0;
          }
        }
        animateFade();
      }
    
      function intro360_animate() {
        requestAnimationFrame(intro360_animate);
    
        // Faire tourner la sphère
        intro360_sphere1.rotation.y += 0.001;
        intro360_sphere2.rotation.y += 0.001;
    
        intro360_renderer.render(intro360_scene, intro360_camera);
      }
    
      intro360_animate();
    }
    
  
  
  
  /* 
  ____ _  _    _  _ _ ____ _ _ _ ___  ____ ____ ___ 
  |___  \/     |  | | |___ | | | |__] |  | |__/  |  
  |    _/\_     \/  | |___ |_|_| |    |__| |  \  |  
  */
  
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const target = entry.target;
        const isIntersecting = entry.isIntersecting;
  
        if(isIntersecting) {
          if(target.classList.contains('fxOpacity')) {
            target.classList.add('visible');
          }
          
          if(target.classList.contains('fxTxtOpacity')) {
            $(target).find('p').each(function() {
              var words = $(this).text().split(' ');
              $(this).empty();
              for (var i = 0; i < words.length; i++) {
                $(this).append($('<span>').addClass('fade-in').css('animation-delay', (i * 0.2) + 's').text(words[i] + ' '));
              }
            });
          }
  
          if(target.classList.contains('fxCharOpacity')) {
            $(target).find('p').each(function() {
              var chars = $(this).text().split('');
              $(this).empty();
              for (var i = 0; i < chars.length; i++) {
                $(this).append($('<span>').addClass('fade-in-char').css('animation-delay', (i * 0.05) + 's').text(chars[i]));
              }
            });
          }
          
  
          if(target.classList.contains('fxSlideL2R')) {
            target.classList.add('startSlideL2R');
          }
  
          if(target.classList.contains('fxSlideR2L')) {
            target.classList.add('startSlideR2L');
          }
  
          if(target.classList.contains('fxSlideT2B')) {
            target.classList.add('startSlideT2B');
          }
  
          if(target.classList.contains('fxSlideB2T')) {
            target.classList.add('startSlideB2T');
          }
        }
  
        
      });
    });
    const elementsToObserve = document.querySelectorAll('.fxOpacity, .fxTxtOpacity, .fxSlideL2R, .fxSlideR2L, .fxSlideT2B, .fxSlideB2T, .fxCharOpacity');
    elementsToObserve.forEach(el => observer.observe(el));
  });
  
  
  
  
  
  
  
  
  
  scrollSoluNumbers();
  
  glassSolution();
    
  handleNavItems();
  swapping();
  
  animateLogos();
  
  loadPage();
  endPage();
  
  BG360();
  
  /*
  _  _ _  _ ____ ____ _ _  _ ____    ____ ____ ____ ____ 
  |__| |  | | __ | __ | |\ | | __    |___ |__| |    |___ 
  |  | |__| |__] |__] | | \| |__]    |    |  | |___ |___ 
  
  */
  
  async function loadMessages(lang) {
    const response = await fetch(`https://toffeeshade.github.io/home/lang/${lang}/${lang}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
  
  async function performApiRequest(url, key, message) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,  
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'inputs': message,
        'options': {
          'max_length': 150
        }
      })
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    if (!data || !data.generated_text) {
      throw new Error('No API response');
    }
  
    return data.generated_text.trim();
  }
  
  function addMessage(container, message, sender, isHTML = false) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement[isHTML ? 'innerHTML' : 'textContent'] = message;
    container.appendChild(messageElement);
    container.scrollTop = container.scrollHeight;
  }
  
  function isValidUrl(url) {
    try {
      new URL(url);
      return url.includes('api-inference.huggingface.co');
    } catch (_) {
      return false;
    }
  }
  
  function isValidApiKey(key) {
    return key.length >= 20;
  }
  
  function getRandomMessage(messageArray) {
    return messageArray[Math.floor(Math.random() * messageArray.length)];
  }
  
  document.addEventListener('DOMContentLoaded', async function() {
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');
    const messageForm = document.getElementById('message-form');
    const lang = document.documentElement.lang || 'fr';
  
    let messages;
    try {
      messages = await loadMessages(lang);
    } catch (error) {
      console.error(error);
      messages = await loadMessages('fr');
    }
  
    addMessage(chatMessages, messages['welcomeMessage'], 'ai', true);
    let apiKey = '';
    let apiUrl = '';
    let isSubmitting = false;
    let messageCount = 0;
    let resetMessageCount = Math.floor(Math.random() * 7) + 3;
  
    document.getElementById('api-key-form').addEventListener('submit', async function(event) {
      event.preventDefault();
      const tempApiKey = document.getElementById('api-key-input').value;
      const tempApiUrl = document.getElementById('api-url-input').value;
  
      if (!isValidUrl(tempApiUrl) || !isValidApiKey(tempApiKey)) {
        console.error('Invalid API key or URL');
        const randomMessage = getRandomMessage(messages['apiNotConnected']);
        addMessage(chatMessages, randomMessage, 'ai');
        return;
      }
  
      apiKey = tempApiKey;
      apiUrl = tempApiUrl;
      document.getElementById('api-key-input').value = '';
      document.getElementById('api-url-input').value = '';
      
      try {
        const aiMessage = await performApiRequest(apiUrl, apiKey, messages['aiIntroduction']);
        addMessage(chatMessages, aiMessage, 'ai');
      } catch (error) {
        console.error('Error connecting to API');
        const randomMessage = getRandomMessage(messages['apiNotConnected']);
        addMessage(chatMessages, randomMessage, 'ai');
      }
    });
  
    messageForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (isSubmitting || messageInput.value.trim() === '') return;
      addMessage(chatMessages, messageInput.value, 'user');
  
      messageCount++;
      if (messageCount >= resetMessageCount) {
        const aiReminder = getRandomMessage(messages['aiReminder']);
        try {
          await performApiRequest(apiUrl, apiKey, aiReminder);
        } catch (error) {
          console.error(`error: ${error}`);
        }
        messageCount = 0;
        resetMessageCount = Math.floor(Math.random() * 7) + 3;
      }
      
      messageInput.value = '';
      isSubmitting = true;
      sendButton.disabled = true;
      messageInput.disabled = true;
    
      try {
        const aiMessage = await performApiRequest(apiUrl, apiKey, messageInput.value);
        addMessage(chatMessages, aiMessage, 'ai');
      } catch (error) {
        console.error(`error: ${error}`);
        const randomMessage = getRandomMessage(messages['apiNotConnected']);
        addMessage(chatMessages, randomMessage, 'ai');
      } finally {
        isSubmitting = false;
        sendButton.disabled = false;
        messageInput.disabled = false;
        messageInput.style.height = 'auto'; 
      }
    });
  
    messageInput.addEventListener('keydown', function(event) {
      if (sendButton.disabled || event.key !== 'Enter' || event.shiftKey) return;
      event.preventDefault();
      messageForm.dispatchEvent(new Event('submit'));
    });
  
    messageInput.addEventListener('input', () => {
      messageInput.style.height = 'auto';
      messageInput.style.height = (messageInput.scrollHeight < window.innerHeight * 0.5 ? messageInput.scrollHeight : window.innerHeight * 0.5) + 'px';
    });
  });
  