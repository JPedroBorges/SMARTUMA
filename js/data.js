function getSensors(callback)
{
    $.get('http://jpborges.pt/smartuma/api/sensors',callback);
}