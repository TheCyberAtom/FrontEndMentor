const count = document.getElementById('count');
const notificationButton = document.getElementById('mark-btn');
const notification = document.querySelectorAll('.notification');
const sentMsgNotification = document.querySelector('.four');

function countNotification(){
    let countNotif = 0;
    notification.forEach((msg) => {
        if(msg.classList.contains('unread')){
            countNotif++;
        }
    });
    count.innerHTML = countNotif;
}


function removeUnread(){
    notification.forEach((msg)=> {
        msg.classList.remove('unread');
    });
    countNotification();
}

countNotification();
notificationButton.addEventListener('click', removeUnread);
sentMsgNotification.addEventListener('click', () => {
    sentMsgNotification.classList.toggle('notification-clicked');
});
notification.forEach((msg) => {
    msg.addEventListener('click', () => {
        msg.classList.remove('unread');
        countNotification();
    });
});
