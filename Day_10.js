const input = `76
51
117
97
7
77
63
18
137
10
23
14
130
131
8
91
17
29
2
36
110
35
113
30
112
61
83
122
28
75
124
82
101
135
42
44
128
32
55
85
119
114
72
111
107
123
54
3
98
96
11
62
22
49
37
1
104
43
24
31
129
69
4
21
48
39
9
38
58
125
81
89
65
90
118
64
25
138
16
78
92
102
88
95
132
47
50
15
68
84
136
103`
  .split('\n')
  .map(Number)
  .sort((a, b) => a - b);

/**
 * Puzzle 1 - Your device is out of power, and you need to figure out how to connect your adapters together to get a charge.
 *
 * @param {[Number]} inputList array of numbers representing the joltage of the adapters in your bag
 * @returns {Number, Object, Number} current joltage, difference distribution, product of 1-digit and 3-digit joltage differences
 */
function getDifferenceDistribution(inputList) {
  const joltageBreakdown = {
    currentJoltage: 0,
    differenceCounts: { 1: 0, 2: 0, 3: 0 },
  };
  for (let i in inputList) {
    if (inputList[i] - joltageBreakdown.currentJoltage > 3) return false;
    joltageBreakdown.differenceCounts[
      inputList[i] - joltageBreakdown.currentJoltage
    ] += 1;
    joltageBreakdown.currentJoltage = inputList[i];
  }
  joltageBreakdown.differenceCounts[3] += 1;
  joltageBreakdown.currentJoltage += 3;
  joltageBreakdown.joltageProduct =
    joltageBreakdown.differenceCounts[1] * joltageBreakdown.differenceCounts[3];
  return joltageBreakdown;
}

console.log(
  'Puzzle 1 - product of joltage chain distributions:',
  getDifferenceDistribution(input)
);
