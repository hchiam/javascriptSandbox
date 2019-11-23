// Code based on: https://codepen.io/beaucarnes/pen/JNvENQ?editors=0010

/* eslint-disable no-unused-vars */

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

const MinHeap = function() {
  const heap = [null];

  this.insert = function(num) {
    heap.push(num);
    // bubble up:
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[idx] < heap[Math.floor(idx/2)]) {
        if (idx >= 1) {
          [heap[Math.floor(idx/2)], heap[idx]] =
            [heap[idx], heap[Math.floor(idx/2)]];
          if (Math.floor(idx/2) > 1) {
            idx = Math.floor(idx/2);
          } else {
            break;
          }
        }
      }
    }
  };

  this.remove = function() {
    const smallest = heap[1];
    if (heap.length < 2) { // last one
      return null;
    } else if (heap.length == 2) { // keep one more
      heap.splice(1, 1);
      return smallest;
    } else if (heap.length > 2) {
      // move last to top:
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      // trivial case:
      if (heap.length == 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      // bubble down:
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        }
      }
      return smallest;
    }
  };

  this.sort = function() {
    const result = [];
    while (heap.length > 1) {
      result.push(this.remove());
    }
    return result;
  };
};
