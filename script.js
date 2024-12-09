document.addEventListener('DOMContentLoaded', () => {
    const roleIcons = document.querySelectorAll('.role-icon');
    const roleContents = document.querySelectorAll('.role-content');

    roleIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // 활성화된 아이콘 변경
            document.querySelector('.role-icon.active').classList.remove('active');
            icon.classList.add('active');

            // 컨텐츠 전환
            const role = icon.getAttribute('data-role');
            const targetContent = document.getElementById(role);

            // 현재 활성화된 컨텐츠 페이드아웃
            const activeContent = document.querySelector('.role-content.active');
            activeContent.style.opacity = '0';
            activeContent.style.transform = 'translateX(-20px)';

            setTimeout(() => {
                activeContent.classList.remove('active');
                targetContent.classList.add('active');
                
                // 새로운 컨텐츠 페이드인
                setTimeout(() => {
                    targetContent.style.opacity = '1';
                    targetContent.style.transform = 'translateX(0)';
                }, 50);
            }, 300);
        });
    });
    
    // 맵 슬라이더 코드 추가
    const slides = document.querySelectorAll('.map-slide');
    const prevButton = document.querySelector('.map-prev');
    const nextButton = document.querySelector('.map-next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.opacity = '0';
        });
        
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        }

        slides[currentSlide].classList.add('active');
        setTimeout(() => {
            slides[currentSlide].style.opacity = '1';
        }, 50);
    }

    if (prevButton && nextButton) {  // 버튼이 존재하는지 확인
        nextButton.addEventListener('click', () => {
            currentSlide++;
            showSlide(currentSlide);
        });

        prevButton.addEventListener('click', () => {
            currentSlide--;
            showSlide(currentSlide);
        });
    }

    // 초기 슬라이드 표시
    showSlide(currentSlide);
    
        // 비디오 버튼 클 이벤트 추가
        const videoButton = document.querySelector('.video-button');
        const videoUrl = 'https://youtu.be/TLpi3FUGFGA?feature=shared'; // 이동할 URL

        if (videoButton) {
            videoButton.addEventListener('click', () => {
                window.location.href = videoUrl;
            });
        }

    // 뉴스 박스 클릭 이벤트 추가
    const newsBoxes = document.querySelectorAll('.news-box');
    const links = [
        'https://youtu.be/JjlpuWA0SHc?feature=shared',
        'https://youtu.be/JEAimCJ50S0?feature=shared',
        'https://playvalorant.com/ko-kr/news/game-updates/valorant-patch-notes-9-08/'
    ];

    newsBoxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            window.location.href = links[index];
        });
    });
    
    // 페이드인 효과 적용
    const fadeInElements = document.querySelectorAll('.fade-in');

    const handleScroll = () => {
        fadeInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                if (!element.classList.contains('visible')) {
                    console.log('Adding visible class to:', element);
                    element.classList.add('visible');
                }
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); //  로드 시에도 체크


    // "보러가기" 버튼 클릭 시 링크 이동
    const gameButton = document.querySelector('.game-button');
    const gameUrl = 'https://playvalorant.com/ko-kr/news/announcements/beginners-guide/'; // 이동할 URL

    if (gameButton) {
        gameButton.addEventListener('click', () => {
            window.location.href = gameUrl;
        });
    }

}); 

// 마우스 오른쪽 클릭 방지
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 이미지 드래그 방지
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// 이미지 선택 방지
document.addEventListener('selectstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
}); 