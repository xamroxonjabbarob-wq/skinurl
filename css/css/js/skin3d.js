// SkinView3d canvas sozlamalari
let skinViewer;

window.addEventListener("DOMContentLoaded", () => {
    skinViewer = new skinview3d.SkinViewer({
        canvas: document.getElementById("skin_container"),
        width: 300,
        height: 350,
        skin: "https://bs-community.github.io/skinview3d/skins/steve.png" // Boshlang'ich skin
    });

    // Kamera va animatsiya sozlamalari
    skinViewer.camera.position.set(0, 10, 40);
    skinViewer.animations.add(skinview3d.WalkingAnimation);

    // Boshqaruv tugmalari
    let isRotating = false;
    document.getElementById("btn_rotate").addEventListener("click", () => {
        isRotating = !isRotating;
        skinViewer.autoRotate = isRotating;
    });

    document.getElementById("btn_walk").addEventListener("click", () => {
        skinViewer.animations.clear();
        skinViewer.animations.add(skinview3d.WalkingAnimation);
    });

    document.getElementById("btn_run").addEventListener("click", () => {
        skinViewer.animations.clear();
        skinViewer.animations.add(skinview3d.RunningAnimation);
    });
});

// Skin rasmini yangilash funksiyasi
function loadSkinToViewer(fileOrUrl) {
    if (skinViewer) {
        skinViewer.loadSkin(fileOrUrl);
    }
}
