// document.querySelector('.profileName').innerHTML='Kumar';

let random = Math.floor(Math.random()*12+1);

document.querySelector('.numOfPosts').innerHTML=random;

document.querySelector('.numOfFollowers').innerHTML=Math.floor(Math.random()*10000+1);

document.querySelector('.numOfFollowing').innerHTML=Math.floor(Math.random()*10+1);


fetch("https://randomuser.me/api/").then(response=>{
    response.json().then(data=>{
        let user = data.results[0];
        console.log(user)
        document.querySelector('.profileName').innerHTML=user.name.first;
        document.querySelector('.bioName').innerHTML=user.name.first+' '+user.name.last;
        document.querySelector('.profilePicture').src=user.picture.medium;


        for(let i=0; i<random; i++){
            let img=document.createElement('img')
        img.src="https://picsum.photos/6"+i;

        document.querySelector('.posts').append(img)


        }

        
    })
})