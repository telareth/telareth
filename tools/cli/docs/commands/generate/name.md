# Generate Name Command

```bash
telareth generate name

# or

telareth g name
```

## Options

- **--times,-t**: number of names to generate. Default 1.
- **--separator,-s**: the character that separates the generated words. Default blank space.
- **--new-line**: prints words on their own line.

## Examples

```bash
telareth g name -t 2 -s "-"

# prints:
happy-elephant
```

```bash
telareth g name -t 3 --new-line

# prints
happy
red
elephant
```
