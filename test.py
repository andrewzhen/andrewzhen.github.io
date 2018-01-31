def falling(n, k):
  for i in range(k):
    n *= n - 1
  return n