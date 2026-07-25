document.addEventListener("DOMContentLoaded", () => {
    const skinInput = document.getElementById("skin_input");
    const mcUsername = document.getElementById("mc_username");
    const btnFetchUsername = document.getElementById("btn_fetch_username");
    const resultBox = document.getElementById("result_box");
    const generatedUrl = document.getElementById("generated_url");
    const btnCopy = document.getElementById("btn_copy");

    // File input orqali skin yuklash
    skinInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            loadSkinToViewer(objectUrl);
            
            // Hozircha local URL hosil qilamiz (Keyin ImgBB API ulaymiz)
            generatedUrl.value = objectUrl;
            resultBox.style.display = "block";
        }
    });

    // Nik orqali Mojang API dan skin olish
    btnFetchUsername.addEventListener("click", () => {
        const username = mcUsername.value.trim();
        if (username) {
            const skinUrl = `https://minotar.net/skin/${username}`;
            loadSkinToViewer(skinUrl);
            generatedUrl.value = skinUrl;
            resultBox.style.display = "block";
        } else {
            alert("Iltimos, Minecraft nikini kiriting!");
        }
    });

    // URL Nusxalash
    btnCopy.addEventListener("click", () => {
        generatedUrl.select();
        document.executecommand("copy");
        navigator.clipboard.writeText(generatedUrl.value);
        alert("Havola nusxalandi!");
    });
});
