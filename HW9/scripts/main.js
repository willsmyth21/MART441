let camera = {
    "Brand" : "Panasonic",
    "Models" : [
    "AG-DVX100",
        "AG-HVX200",
        "AG-HPX170",
        "AG-HPX500",
        "AG-HSC1",
        "AG-HMC150",
        "AG-HMC40",
        "AG-HPX300",
        "AG-HPX370",
        "AG-AF100",
        "AG-AC130",
        "AG-AC160",
        "AG-HPX600",
        "AJ-PX800",
        "AG-DVX200",
        "HC-X2",
    ]
}

$(function () {
$("button").click(function () {
    showCameraInfo();
});

});

function showCameraInfo()
{
    $("#cameraInformation").html("Brand: " + camera.Brand 
    + "<br>Models:<br>" +
    camera.Models[0] + "<br>" + camera.Models[1] + "<br>" + camera.Models[2] + "<br>" + camera.Models[3] +
    camera.Models[4] + "<br>" + camera.Models[5] + "<br>" + camera.Models[6] + "<br>" + camera.Models[7] +
    camera.Models[8] + "<br>" + camera.Models[9] + "<br>" + camera.Models[10] + "<br>" + camera.Models[11] +
    camera.Models[12] + "<br>" + camera.Models[13] + "<br>" + camera.Models[14] + "<br>" + camera.Models[15]);
}