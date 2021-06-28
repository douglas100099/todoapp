export const formatedDate = () : String => {
    const today = new Date();
    const monthToday = today.getMonth();
    const dayToday = today.getDay();
    const days = ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sáb.'];
    const month = ['Jan','Fev','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
    const date = today.getDate() < 10 ? '0'+today.getDate() : today.getDate();
    return 'Hoje, ' + date + ' ' + month[monthToday - 1] + ', ' + days[dayToday];
};

export const formatedHours = (date: Date) : String => {
    const dateParam = new Date(date);
    const hours = dateParam.getHours() < 10 ? '0'+dateParam.getHours() : dateParam.getHours();
    const minutes = dateParam.getMinutes() < 10 ? '0'+dateParam.getMinutes() : dateParam.getMinutes();
    return hours + ':' + minutes;
};

export const formatedDateDays = (date: Date) : String => {
    const dateParam = new Date(date);
    const day = dateParam.getDate() < 10 ? '0'+dateParam.getDate() : dateParam.getDate();
    const month = dateParam.getMonth() < 10 ? '0'+dateParam.getMonth() : dateParam.getMonth();
    const year = dateParam.getFullYear();
    return day + '/' + month + '/' + year;
};