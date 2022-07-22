class GNode {
  constructor(data) {
    this.data = data;
  }
}

class MGraph {
  /**
   * 构造函数
   * @param {Number} numNodes 顶点数
   * @param {Number} numEdges 边数
   * @param {Array} nodes 顶点信息
   */
  constructor(numNodes, numEdges, nodes) {
    /** 顶点信息 */
    this.vertexs = nodes;
    /** 边/弧信息 */
    this.arc = null;
    /** 边的数量 */
    this.numEdges = numEdges;
    /** 顶点数 */
    this.numNodes = numNodes;
  }

  /**
   * 初始化
   * @param {Array} nodes 顶点
   */
  init() {
    const len = this.vertexs.length;
    this.arc = new Array(len);
    for (let i = 0; i < len; i++) {
      this.arc[i] = new Array(len);
      for (let j = 0; j < len; j++) {
        this.arc[i][j] = Infinity;
      }
    }
  }

  /**
   * 添加矩阵
   * @param {Any} node1 顶点1
   * @param {Any} node2 顶点2
   * @param {String|Number} weight 权值
   */
  addArc(node1, node2, weight) {
    const head = this.vertexs.indexOf(node1);
    const tail = this.vertexs.indexOf(node2);
    if (head !== -1 && tail !== -1) {
      this.arc[head][tail] = weight;
      this.arc[tail][head] = this.arc[head][tail];
    }
  }
}

const v1 = new GNode("v1");
const v2 = new GNode("v2");
const v3 = new GNode("v3");

const graph = new MGraph(3, 3, [v1, v2, v3]);

graph.init();

graph.addArc(v1, v2, 2);
graph.addArc(v2, v3, 3);
graph.addArc(v3, v1, 4);

console.log(graph.numEdges);
console.log(graph.numNodes)
console.log(graph.arc);
console.log(graph.vertexs);
