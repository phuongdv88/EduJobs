
$(document).ready(function () {
    
    // table
    $('#tableDanhSach').DataTable();

    //     function getdata() {
    //         var editorText = CKEDITOR.instances.editor1.getData();

    //    document.getElementById("a").innerHTML = editorText;
   
});
$(function(){
    config = {};
    config.entities_latin = false;
    config.height = 500;

    CKEDITOR.replace('post', config);
})
$(function () {
    var currencies = [
        { value: 'Afghan afghani, ha noi' },
        { value: 'Albanian lek da nang' },
        { value: 'Algerian dinar' },
        { value: 'European euro' },
        { value: 'Angolan kwanza' },
        { value: 'East Caribbean dollar' },
        { value: 'Vietnamese dong' },
        { value: 'Yemeni rial' },
        { value: 'Zambian kwacha' },
        { value: 'Zimbabwean dollar' },
    ];


    $('#textsearch').autocomplete({
        lookup: currencies,
    });

    $('#diadiem').autocomplete({
        lookup: currencies,
    });

});

