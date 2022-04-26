const apiUrl = "https://static.pipezero.com/covid/data.json";

(async () => {
    const { data } = await axios.get(apiUrl);
    const { cases, treating, recovered, death } = data.total.internal;
    
    // render tổng
    $(".info-infected").text(cases.toLocaleString());
    $(".info-treated").text(treating.toLocaleString());
    $(".info-recovered").text(recovered.toLocaleString());
    $(".info-deceased").text(death.toLocaleString());
    
    // thông tin theo tỉnh/tp
    const { locations } = data;
    $("#result-block").html(
        locations
            .map(item => /*html*/ `
            <tr>
                <td>${item.name.toLocaleString()}</td>
                <td>${item.cases.toLocaleString()}</td>
                <td>${item.casesToday.toLocaleString()}</td>
                <td>${item.death.toLocaleString()}</td>
            </tr>
            `)
            .join("")
    );

})();