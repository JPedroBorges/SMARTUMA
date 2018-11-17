const GRAU_SAT = Math.random() * 100;
temp_data.data = 
  [{ "label": "Sala de estudo 0", "value": "23" }, 
    { "label": "Sala de estudo 1" , "value": "26" }, 
    { "label": "Núcleo de informática", "value": "18" }, 
    { "label": "Sala de estudo 3", "value": "14" }, 
    { "label": "Biblioteca", "value": "15"}];
temp_data_week.dataset = 
  [{ 
      "seriesname": "Sala de estudo 0",
      "data": [{ "value": "21" },
                  { "value": "24" },
                  { "value": "27" },
                  { "value": "30"}]
    },
    {
      "seriesname": "Sala de estudo 1",
      "data": [{ "value": "8" },
                  { "value": "10"},
                  { "value": "11"},
                  { "value": "12"}]
    },
     {
      "seriesname": "Núcleo de informática",
      "data": [{ "value": "8" },
                  { "value": "10"},
                  { "value": "11"},
                  { "value": "12"}]
    },
    {
      "seriesname": "Sala de estudo 3",
      "data": [{ "value": "8" },
                  { "value": "10"},
                  { "value": "11"},
                  { "value": "12"}]
    },
    {
      "seriesname": "Biblioteca",
      "data": [{ "value": "8" },
                  { "value": "10"},
                  { "value": "11"},
                  { "value": "12"}]
    }];
sat_data.dials.dial = [{"value": GRAU_SAT}];
owifi_data.data = [
    { "label": "00:00", "value": "20" },
    { "label": "01:00", "value": "17" },
    { "label": "02:00", "value": "12" },
    { "label": "03:00", "value": "7" },
    { "label": "04:00", "value": "8" },
    { "label": "05:00", "value": "8" },
    { "label": "06:00", "value": "3" },
    { "label": "07:00", "value": "5" }];
var days = getCurrentWeek();
owifi_data_week.data = [
    { "label": days[0].label, "value": "50" },
    { "label": days[1].label, "value": "42" },
    { "label": days[2].label, "value": "44" },
    { "label": days[3].label, "value": "38" },
    { "label": days[4].label, "value": "51" },
    { "label": days[5].label, "value": "32" },
    { "label": days[6].label, "value": "11" }];

qwifi_data_week.dataset[0].data = [
    { "rowid": "Sala de estudo 0", "columnid": days[0].label, "value": -25 },
    { "rowid": "Sala de estudo 1", "columnid": days[0].label, "value": -74 },    
    { "rowid": "Núcleo de informática", "columnid": days[0].label, "value": -87 },    
    { "rowid": "Sala de estudo 3", "columnid": days[0].label, "value": -55 },    
    { "rowid": "Biblioteca", "columnid": days[0].label, "value": -67 },        
    { "rowid": "Sala de estudo 0", "columnid": days[1].label, "value": -39 },
    { "rowid": "Sala de estudo 1", "columnid": days[1].label, "value": -77 },    
    { "rowid": "Núcleo de informática", "columnid": days[1].label, "value": -88 },    
    { "rowid": "Sala de estudo 3", "columnid": days[1].label, "value": -55 },    
    { "rowid": "Biblioteca", "columnid": days[1].label, "value": -65 },        
    { "rowid": "Sala de estudo 0", "columnid": days[2].label, "value": -54 },
    { "rowid": "Sala de estudo 1", "columnid": days[2].label, "value": -58 },    
    { "rowid": "Núcleo de informática", "columnid": days[2].label, "value": -57 },    
    { "rowid": "Sala de estudo 3", "columnid": days[2].label, "value": -69 },    
    { "rowid": "Biblioteca", "columnid": days[2].label, "value": -35 },        
    { "rowid": "Sala de estudo 0", "columnid": days[3].label, "value": -22 },
    { "rowid": "Sala de estudo 1", "columnid": days[3].label, "value": -74 },    
    { "rowid": "Núcleo de informática", "columnid": days[3].label, "value": -55 },    
    { "rowid": "Sala de estudo 3", "columnid": days[3].label, "value": -88 },    
    { "rowid": "Biblioteca", "columnid": days[3].label, "value": -99 },        
    { "rowid": "Sala de estudo 0", "columnid": days[4].label, "value": -24 },
    { "rowid": "Sala de estudo 1", "columnid": days[4].label, "value": -73 },    
    { "rowid": "Núcleo de informática", "columnid": days[4].label, "value": -54 },    
    { "rowid": "Sala de estudo 3", "columnid": days[4].label, "value": -55 },    
    { "rowid": "Biblioteca", "columnid": days[4].label, "value": -78 },        
    { "rowid": "Sala de estudo 0", "columnid": days[5].label, "value": -32 },
    { "rowid": "Sala de estudo 1", "columnid": days[5].label, "value": -55 },    
    { "rowid": "Núcleo de informática", "columnid": days[5].label, "value": -45 },    
    { "rowid": "Sala de estudo 3", "columnid": days[5].label, "value": -27 },    
    { "rowid": "Biblioteca", "columnid": days[5].label, "value": -58 },        
    { "rowid": "Sala de estudo 0", "columnid": days[6].label, "value": -98 },
    { "rowid": "Sala de estudo 1", "columnid": days[6].label, "value": -77 },    
    { "rowid": "Núcleo de informática", "columnid": days[6].label, "value": -32 },    
    { "rowid": "Sala de estudo 3", "columnid": days[6].label, "value": -44 },    
    { "rowid": "Biblioteca", "columnid": days[6].label, "value": -42 }];
qwifi_data.dataset.forEach(function(e)
{
    for(var i = 0; i < 7; i++)
      e.data.push({ value: -Math.random() * 100 });
});

$(document).ready(function()
{
    animateScroll();
    adaptTheme(GRAU_SAT);
    drawChart('oWifiChart1',owifi_data);           
    drawChart('oWifiChart2',owifi_data_week); 
    drawChart('qWifiChart1',qwifi_data);    
    drawChart('qWifiChart2',qwifi_data_week);    
    drawChart('tempChart1',temp_data);
    drawChart('tempChart2',temp_data_week);    
    drawChart('satChart',sat_data);    
});