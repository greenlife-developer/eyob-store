document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    const el = document.querySelectorAll(".tabs")
    M.Collapsible.init(elems)
    M.Tabs.init(el);
});