# Representing Neural Networks

## Highlights

- Logistic regression could slightly be considered a subset of neural networks if you look at the last two layers. The theta of the second to last layer is 1 by 4.

- Neural networks learn the features that it finds important. ie. it creates its own features.

- Our equation for determining the next layer's unit.

$$
a_i^{(j)} = g(\theta^{j-1}a^{(j-1)})
$$

>Grab previous layer unit, apply weights, apply Sigmoid function.

- Applies to non-linear scenarios such as
  - AND
  - XOR/XNOR


## Neural Networks

We can denote a typical neural network as as input layers, hidden layers and output layers.

![alt text](https://slideplayer.com/slide/12620833/76/images/9/Neural+Network+12+Slide+by+Andrew+Ng.jpg "neural")

$a_i^j$ where $i$ denotes the unit and $j$ denotes the layer
$\theta^j$ denotes the **matrix of weights controlling function mapping from layer $j$ to $j + 1$**

Each layer will determine an application of
1. Applying the theta to each $x$
2. Summing them together
3. Then applying the function $g(x)$ (which could be something like the sigmoid function)

The size of the matrix $\theta$ is $s_{j+1}$ by $s_j + 1$. Our $\theta$ must be applied uniquely to create $s_{j+1}$ units of the next layer, using the $s_j + 1$ units we have in our current layer. (The +1 is derived from the bias unit). 

We can call this neural network **forward propagating**

## How do they learn?
Consider we were only looking at layer 2 and layer 3. $h_{\theta}(x)$ is the function $g(z)$ where $g$ is the sigmoid function and $z$ is the summation of the theta weights multiplied by the $a$ values.

$$
h_{\theta}(x) = g(\theta_{10}^{(2)}a^{(2)}_0 + \theta_{11}^{(2)}a^{(2)}_1 + \theta_{12}^{(2)}a^{(2)}_2 + \theta_{13}^{(2)}a^{(2)}_3)
$$

Looking at just these two layers, it is just logistic regression. So the essential difference between normal logistic regression and neural networks is that each layer generates its own features. $x_i$ becomes $a_i$ becomes $b_i...$, and then applies logistic regression to each of those features. We have to create a $\theta$ at each layer. Thus,

>The network learns its own features that it finds important.

## Non-linear representations

Neural networks can apply to logical AND etc. classifications.

Imagine we had parameters such that
$$
\theta = \begin{pmatrix} -30 & 20 & 20 \end{pmatrix}
$$

$$
x = \begin{pmatrix} 1 \\ x_1 \\ x_2 \end{pmatrix}
$$

| $x_1$       | $x_2$          | $\theta x$ |
| ------------- |-------------| -----:|
| 0     | 0 | -30 |
| 1      | 0    |   -10 |
| 0      | 1    |   -10 |
| 1      | 1    |   10 |

Usefully, if we apply the sigmoid function to $\theta x$, we would get, in order, 0, 0, 0, 1 approximately. This is just like a truth table.

## Multi-class classification
If you are differentiating between say a car, pedestrian etc.
Your output units will be the number of things you are differentiating against. So to differentiate between if this is a pedestrian, car, motorcycle, truck in that order

$$
y = \begin{pmatrix} 1 \\ 0 \\ 0 \\0 \end{pmatrix}
$$

So this implies that it is a pedestrian.


