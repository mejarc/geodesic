# Geodesic

Geodesic is a Sass toolkit for making large systems out of small parts. The
parts in question include functional/atomic classes, object-oriented classes,
and useful patterns and mixins to make writing new classes easier. It’s a living
pattern language that influences and is in turn influenced by design systems that Mule
builds for clients.

## Quick and Dirty Start
One day, we'll figure out an easy and repeatable way for this to work.

**For now:**

Grab the `scss/` directory and drop it into your project, since it has no
dependencies except for the included [nuthin](http://github.com/muledesign/nuthin).

Edit the stuff in `scss/settings/` for your project, and you're off and running!
There's little enough included that Geodesic can act as a starter kit, rather
than a big framework out of which you have to delete stuff.

`TODO: write actual documentation, build github pages site`

## Principles

### Coherent > Consistent
Some people like [functional](http://www.jon.gold/2015/07/functional-css/) classes, other people like [objects](https://github.com/stubbornella/oocss/wiki/faq). Geodesic uses both, because sometimes one or the other is a more appropriate way of getting something done. Trying to shoe-horn everything into a single conceptual model is a great way to make certain stuff really hard to do. Instead, Geodesic has a few different concepts around which rules are organized. Choose the one that will make your code easiest to use and understand.

### Descriptive > Concise
The best kind of documentation is when a component's name tells you everything you need to know about it. I feel comfortable trading a few extra bytes in a class name for improved developer comprehension. Code that developers don’t understand gets duplicated in a way they do understand. This is the answer to the mystery of why your stylesheets keep getting bigger.

### Discrete > Dependent
The more components rely on one another, the harder it is to make a single change to the system without unintended side effects. Using smaller, more focused classes lets trade more class names for better fine-grained control of elements. If you do it right, you'll have to change styles less often.
