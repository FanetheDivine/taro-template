import { FC, useCallback, useState } from "react";
import { View, Text, Button } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";

const Index: FC = () => {
  const env = useEnv();
  const [num, setNum] = useState(1);
  const { setTitle } = useNavigationBar();
  const showModal = useModal({
    title: "Taro Hooks Canary!",
    showCancel: false,
    confirmColor: "#8c2de9",
    confirmText: "支持一下",
  });
  const { show } = useToast({ mask: true });

  const handleModal = useCallback(() => {
    showModal({ content: "不如给一个star⭐️!" }).then(() => {
      show({ title: "点击了支持!" });
    });
  }, [show, showModal]);

  return (
    <View className="w-full h-full flex flex-col items-start">
      <Button onClick={() => setNum(num + 1)}>{num}</Button>
      <Text className="text-red-300">为Taro而设计的Hooks Library</Text>
      <View className="list">
        <Text className="label">运行环境</Text>
        <Text className="note">{env}</Text>
      </View>
      <Button className="button" onClick={() => setTitle("Taro Hooks Nice!")}>
        设置标题
      </Button>
      <Button className="button" onClick={handleModal}>
        使用Modal
      </Button>
    </View>
  );
};

export default Index;
