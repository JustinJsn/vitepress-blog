class EdgeNode {
  constructor(adjacentVertices, next, weight) {
    this.adjacentVertices = adjacentVertices;
    this.weight = weight;
    this.next = next || null;
  }
}

class VertexNode {
  constructor(data, firstEdge) {
    this.data = data;
    this.firstEdge = firstEdge || null;
  }
}

class CreateAlGraph {
  constructor(verties, edgeNums) {
    this.verties = null;
    this.edgeNums = edgeNums;
    this.nodeNums = verties.length;

    for (let i = 0; i < verties.length; i++) {
      const vertexNode = new VertexNode(verties[i], null);
      if (!this.verties) {
        this.verties = [vertexNode];
      } else {
        this.verties.push(vertexNode);
      }
    }
  }

  addEdge(v1, v2, isDirection, weight) {
    /** A顶点下标 */
    const headVertexIndex = this.verties.findIndex(item => item.data === v1);
    /** B顶点下标 */
    const tailVertexIndex = this.verties.findIndex(item => item.data === v2);

    if (isDirection) { // 有向图
      const vertex01 = new EdgeNode(headVertexIndex, null, weight);
      const vertex02 = new EdgeNode(tailVertexIndex, null, weight);
      vertex01.next = this.verties[headVertexIndex].firstEdge;
      this.verties[headVertexIndex].firstEdge = vertex02;
    } else { // 无向图
      const vertex01 = new EdgeNode(headVertexIndex, null);
      const vertex02 = new EdgeNode(tailVertexIndex, null);
      vertex01.next = this.verties[headVertexIndex].firstEdge;
      this.verties[headVertexIndex].firstEdge = vertex02;
      vertex02.next = this.verties[tailVertexIndex].firstEdge;
      this.verties[tailVertexIndex].firstEdge = vertex01;
    }
  }
}

const v1 = new VertexNode('v1', null);
const v2 = new VertexNode('v2', null);
const v3 = new VertexNode('v3', null);

const graph = new CreateAlGraph([v1, v2, v3], 1);
graph.addEdge(v1, v2, false);
graph.addEdge(v2, v3, false);
graph.addEdge(v3, v1, false);

console.log(graph.verties);
