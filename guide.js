/* ==================== guide.js ==================== */

(function() {
    console.log("Guide helper script initialized.");

    // DOM 변화를 모니터링하여 가이드 영역 렌더링 시 추가 보정을 수행합니다.
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                auditGuideIcons();
            }
        });
    });

    const targetNode = document.getElementById("tab-manual") || document.body;
    observer.observe(targetNode, { childList: true, subtree: true });

    function auditGuideIcons() {
        // 1. 퀵 네비게이션 링크들 중 class가 누락된 경우 복구
        const quickNavLinks = document.querySelectorAll(".quick-nav-link");
        quickNavLinks.forEach(link => {
            if (!link.classList.contains("software-icon-item")) {
                link.classList.add("software-icon-item");
            }
        });

        // 2. 각 아이콘 크기 고정 및 inline display flex 보정
        const iconItems = document.querySelectorAll(".software-icon-item");
        iconItems.forEach(item => {
            item.style.display = "flex";
            item.style.alignItems = "center";
            
            const img = item.querySelector("img");
            if (img) {
                img.style.width = "24px";
                img.style.height = "24px";
                img.style.objectFit = "contain";
            }
        });
    }

    // 초기 실행
    window.addEventListener("load", auditGuideIcons);
})();
