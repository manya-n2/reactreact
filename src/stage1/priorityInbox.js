const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const getTopNotifications = (
  notifications,
  n = 10
) => {
  return [...notifications]
    .sort((a, b) => {
      const weightA = weights[a.Type] || 0;
      const weightB = weights[b.Type] || 0;

      if (weightA !== weightB) {
        return weightB - weightA;
      }

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );
    })
    .slice(0, n);
};