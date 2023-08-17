interface handleIndexChangeProps {
  index: number;
  handleTabActivity: (index: number) => void;
}

export const handleIndexChange = ({
  index,
  handleTabActivity,
}: handleIndexChangeProps) => handleTabActivity(index);
