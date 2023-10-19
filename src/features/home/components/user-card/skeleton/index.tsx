import { HighLightBorder } from '@/common/components/ui/effects/highlight-border';

export const Skeleton = () => {
  return (
    <div className="relative h-[636px] drop-shadow">
      <div className="absolute z-[2] flex h-[636px] w-full flex-col justify-end bg-gray-7">
        <div className="h-[36px] bg-gray-4" />
      </div>

      <HighLightBorder />
    </div>
  );
};
