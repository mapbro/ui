import { DefaultProps } from "../../types";

// TODO 추상화 해야함
export interface LoadingProps extends DefaultProps {
  /**
   * 로딩 아이콘 크기
   * @default 16
   */
  size?: number;
  /**
   * 로딩 상태
   * @default false
   */
  loading?: boolean;
}

export const Loading = ({
  size = 16,
  loading = false,
  ...rest
}: LoadingProps) => {
  if (!loading) {
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#fff"
      role="presentation"
      {...rest}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2.5 2.5)" strokeWidth="5">
          <circle strokeOpacity=".5" cx="16" cy="16" r="16"></circle>
          <path d="M32 16c0-9.94-8.06-16-16-16">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 16 16"
              to="360 16 16"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
          </path>
        </g>
      </g>
    </svg>
  );
};
