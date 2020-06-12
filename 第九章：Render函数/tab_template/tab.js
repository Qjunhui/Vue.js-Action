// 表格的最外层是＜table＞元素
// thead是一行多列（一个<tr>、多个＜th>)
// tbody是多行多列（多个<tr>、多个<td>）

Vue.component('vTab',{
    props : {
        columns : {
            type : Array,
            default : function() {
                return [];
            }
        },
        data : {
            type : Array,
            default : function() {
                return [];
            }
        }
    },
    data : function() {
        return {
            currentColumns : [],
            currentData : []
        }
    },
    template : `<table>
                    <thead>
                        <template v-for="(item,index) in currentColumns">
                            <th v-if="item.sortable">
                                <span>{{ item.title }}</span>
                                <a :class="isOn(index,'\asc\')" @click="handleSort(index,'\asc\')">↑</a>
                                <a :class="isOn(index,'\desc\')" @click="handleSort(index,'\desc\')">↓</a>
                            </th>
                            <th v-else>{{ item.title }}</th>
                        </template>
                    </thead>
                    <tbody>
                        <tr v-for="(row,index) in currentData">
                            <td>{{ row.name }}</td>
                            <td>{{ row.age }}</td>
                            <td>{{ row.birthday }}</td>
                            <td>{{ row.address }}</td>
                        </tr>
                    </tbody>
                </table>`,
    methods : {
        makeColumns : function() {
            this.currentColumns = this.columns.map(function(col,index) {
                col._sortType = 'normal';
                col._index = index;
                return col;
            })
        },
        makeData : function() {
            this.currentData = this.data.map(function(row,index) {
                row._index = index;
                return row;
            })
        },
        isOn : function(index,value) {
            if( (this.currentColumns[index]._sortType === 'asc' && value === 'asc') || (this.currentColumns[index]._sortType === 'desc' && value === 'desc') ) {
                return 'on';
            }else {
                return '';
            }
        },
        handleSort : function(index,type) {
            var key = this.currentColumns[index].key;
            this.currentColumns.forEach(function(col) {
                col._sortType = 'normal';
            });
            this.currentColumns[index]._sortType = type;

            this.currentData.sort(function(a,b) {
                return (type === 'asc' ? a[key] > b[key] : a[key] < b[key]) ? 1 : -1;
            })
        }
    },
    watch : {
        data : function() {
            this.makeData();
            var sortedColumn = this.currentColumns.filter(function (col) { 
                return col.sortType !== 'normal'; 
            });

            if (sortedColumn.length > 0) { 
                if (sortedColumn[0]._sortType === 'asc'){ 
                    this.handleSort(sortedColumn[0]._index,'asc'); 
                } else { 
                    this.handleSort(sortedColumn[0]._index,'desc'); 
                }
            }
        }
    },
    mounted() {
        this.makeColumns();
        this.makeData();
    },
    
})