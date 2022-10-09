setInterval(() => {
d=new Date();
timeh=d.getHours();
timem=d.getMinutes();
times=d.getSeconds();
hrot=timeh*30+timem/2;
mrot=timem*6;
srot=times*6;
hour.style.transform=`rotate(${hrot}deg)`
minute.style.transform=`rotate(${mrot}deg)`
second.style.transform=`rotate(${srot}deg)`
}, 1000);
