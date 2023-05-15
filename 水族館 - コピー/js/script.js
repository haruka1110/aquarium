const openingVideo = document.getElementById("opening-video");
const content = document.getElementById("content");

openingVideo.addEventListener("ended", function() {
  openingVideo.style.opacity = 0;
  setTimeout(function() {
    openingVideo.style.display = "none";
    content.style.opacity = 1;
  }, 1000);
});

// スライドショーの自動切り替え間隔（ミリ秒）
const slideshowInterval = 3000;

// スライドショーの実行
function startSlideshow() {
    const gallery = document.querySelector('#gallery');
    const slides = document.querySelectorAll('#gallery .exhibit');
    let slideIndex = 0;

    const prevButton = document.createElement('div');
    prevButton.className = 'prev';
    prevButton.innerHTML = '&#10094;';
    gallery.appendChild(prevButton);

    const nextButton = document.createElement('div');
    nextButton.className = 'next';
    nextButton.innerHTML = '&#10095;';
    gallery.appendChild(nextButton);

    prevButton.addEventListener('click', () => {
        slides[slideIndex].style.display = 'none';
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        slides[slideIndex].style.display = 'block';
    });

    nextButton.addEventListener('click', () => {
        slides[slideIndex].style.display = 'none';
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].style.display = 'block';
    });

    setInterval(() => {
        slides[slideIndex].style.display = 'none';
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].style.display = 'block';
    }, slideshowInterval);
}

// ページの読み込みが完了したらスライドショーを開始
window.addEventListener('load', startSlideshow);


// ページの読み込みが完了したら実行
window.addEventListener('DOMContentLoaded', function() {
    // 泡を生成する関数
    function createBubble() {
      const bubbleContainer = document.querySelector('.bubble-container');
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
  
      // ランダムな位置に泡を配置
const randomX = Math.random() * window.innerWidth;
const randomY = Math.random() * (window.innerHeight - 100) + 100;  // 下から100px上に移動
bubble.style.left = `${randomX}px`;
bubble.style.top = `${randomY}px`;

  
      bubbleContainer.appendChild(bubble);
  
      // 一定時間後に泡を削除
      setTimeout(function() {
        bubble.remove();
      }, 6000);
    }
  
    // 一定間隔で泡を生成
    setInterval(createBubble, 1000);
  });
  

  // ページのスクロール位置を監視して、ボタンの表示・非表示を切り替える
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var scrollToTopButton = document.querySelector('.scroll-to-top');
    if (scrollPosition > 100) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  

  