# 捕获到异常 则抛出
trap "exit 1" ERR

while :
  do
    if lsof -i:8000; then
      sleep 30
      # 判断是否已经有reference
      if [ ! -d "backstop_data/bitmaps_reference" ];then
       backstop reference
       kill -9 $(lsof -i :8000 | awk '{print $2}')
       break;
      else
        backstop test
        kill -9 $(lsof -i :8000 | awk '{print $2}')
        break;
      fi
    fi
  sleep 3
done
