
var nameField = document.getElementById("nameField");
        var amountField = document.getElementById("amountField");
        var dateField = document.getElementById("dateField");
        var expenseButton = document.getElementById("expenseButton");
        var table = document.getElementById('table');
        
        var List = [];
        var List1 = [];
        var List2 = [];

        
        expenseButton.addEventListener("click", function () {
            //e.preventDefault();

            List.push(nameField.value);
            List1.push(dateField.value);
            List2.push(amountField.value);

           
            
            nameField.value = "";
            dateField.value = "";
            amountField.value = "";
            console.log(List1);
            renderList();

        });

        

        function handleDelete(index) {
            var newList = [];
            var newList1 = [];
            var newList2 = [];
            for (let i = 0; i < List.length && i < List1.length && i < List2.length; i++) {
                if (i != index) {
                    newList.push(List[i]);
                    newList1.push(List1[i]);
                    newList2.push(List2[i]);
                }
            }
            List = newList;
            List1 = newList1;
            List2 = newList2;
            renderList();

        }


        function renderList() {
            var res = "";
            for (let i = 0; i < List.length && i < List1.length && i < List2.length; i++) {
                var single = List[i];
                var single1 = List1[i];
                var single2 = List2[i];
                var html =
                    `<div>
                                <table>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th style="width: 50px;"></th>
                                    </tr>
                                    <tr>
                                        <td>${single}</td>
                                        <td>${single1}</td>
                                        <td>${single2}</td>
                                        <td style="width: 50px;">
                                            <button onclick=handleDelete(${i})><i class="fas fa-times"></i></button>
                                        </td>                     
                                    </tr>
                                <table>
                             </div>`

                res += html;

            }
            table.innerHTML = res;

            
        }

