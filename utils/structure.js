// list分类转换成树形结构
const listToTree = function (arr = []) {
    arr.forEach(item1 => {
        let parentId = item1.pid;
        if (parentId != 0) {
            arr.forEach(item2 => {
                if (item2.id == parentId) {
                    if (!item2.children) item2.children = [];
                    item2.children.push(item1);
                }

            });
        }
    });
    return arr.filter(element => element.pid === 0);
};

export {
    listToTree
};
