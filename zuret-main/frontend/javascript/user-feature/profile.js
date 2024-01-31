function setProfileData() {
    const profileData = JSON.parse(localStorage.getItem('infoSet'));
    const info = localStorage.getItem('currentEmail')
    const infos = profileData[localStorage.getItem('currentEmail')];
    const profile = `<div class="profile-picture">
    <img id = "profile-picture" src="../uploads/user.png" alt="Profile Picture">
</div>
<div class="profile-info">
    <h1 class="userInfo" id="name">name : ${infos.name}</h1>
    <p class="userInfo" id="email">Email : ${infos.email}</p>
    <p class="userInfo" id="birthdate">Birthdate : ${infos.birthdate}</p>
    <p class="userInfo" id="nationality">Country : ${infos.country}</p>
    <p class="userInfo" id="bio">Bio : ${infos.bio}</p>
    <button id="edit">Edit Profile</button>
</div>`

const profileContainer = document.querySelector('.profile-container');
profileContainer.innerHTML = profile;

}