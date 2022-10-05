window.addEventListener('DOMContentLoaded', function () {
    createTabularInnterHtml();
})

const remove = (id) => {
    let empList = JSON.parse(localStorage.getItem('EmpList'));
    let emp = empList.find(empData => empData._id == id);
    const index = empList.map(empData => empData._id).indexOf(emp._id);
    empList.splice(index, 1);
    localStorage.setItem('EmpList', JSON.stringify(empList));
    createTabularInnterHtml();
};

function createTabularInnterHtml() {
    let tableContent = document.querySelector('#table-display');

    let empCnt = document.querySelector('.emp-count');

    var tableData =
        `<tr>
    <th> Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
    </tr>`;

    
    var empList = JSON.parse(localStorage.getItem('EmpList'));

    empCnt.innerHTML = empList.length;
    empList.forEach(e => {
        tableData = `${tableData}<tr>
        <td class="progileRow"><img src="${e._profilePic}">${e._name}</td>
        <td>${e._gender}</td>
        <td>${e._department}</td>
        <td>${e._salary}</td>
        <td>${e._startDate}</td>
        <td>
                    <img src="../assets/icons/delete-black-18dp.svg" alt="" onclick="remove('${e._id}')">
                    <img src="../assets/icons/create-black-18dp.svg" alt="" onclick="edit('${e._id}')">
                </td>
        </tr>`;
    });
    tableContent.innerHTML = tableData;
}