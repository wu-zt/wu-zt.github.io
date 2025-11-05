// 等待 HTML 文档加载完毕
document.addEventListener('DOMContentLoaded', () => {

    // 1. 获取元素
    const toggleButton = document.getElementById('theme-toggle-button');
    const body = document.body;

    // 2. 定义一个函数来切换主题
    function toggleTheme() {
        // 切换 body 上的 'dark-mode' 类
        body.classList.toggle('dark-mode');

        // 3. 检查当前是什么模式，并保存到本地存储
        if (body.classList.contains('dark-mode')) {
            // 如果是黑夜模式
            localStorage.setItem('theme', 'dark');
            toggleButton.textContent = '☀️'; // 按钮显示太阳
        } else {
            // 如果是白天模式
            localStorage.setItem('theme', 'light');
            toggleButton.textContent = '🌙'; // 按钮显示月亮
        }
    }

    // 4. 检查本地存储中是否有保存的主题偏好
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        // 如果保存的是 'dark'，直接应用黑夜模式
        toggleTheme();
    }

    // 5. 为按钮添加点击事件监听
    toggleButton.addEventListener('click', toggleTheme);
});