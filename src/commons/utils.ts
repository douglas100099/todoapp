export const formatedDate = () : String => {
    const today = new Date();
    const monthToday = today.getMonth();
    const dayToday = today.getDay();
    const days = ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sáb.'];
    const month = ['Jan','Fev','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
    const date = today.getDate() < 10 ? '0'+today.getDate() : today.getDate();
    return 'Hoje, ' + date + ' ' + month[monthToday - 1] + ', ' + days[dayToday];
};