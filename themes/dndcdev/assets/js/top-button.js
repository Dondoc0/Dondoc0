document.addEventListener('DOMContentLoaded', function() {
    const topButton = document.getElementById('topButton');

    // スクロールイベントをリッスン
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            topButton.classList.add('show');
            topButton.classList.remove('hide');
        } else {
            topButton.classList.remove('show');
            topButton.classList.add('hide');
        }
    });

    // トップボタンがクリックされたときの処理
    topButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
