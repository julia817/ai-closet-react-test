class ChooseController < ApplicationController
  def ai
    current = Weather.current
    # @current_weather = current["weather"][0]["description"]
    # @current_degree = current["main"]["temp"]
    @max_temp = current["main"][temp_max]
    @min_temp = current["main"][temp_min]

    # 女性の場合：ワンピースか上下か
    random = Random.new()
    if random.rand(1..2) == 1
      # ワンピース
    else
      # 上下


    # 晴れの場合
    if current["weather"][0][id] > 700 {
      # 最低気温25以上

      # 気温15~25度

      # 気温5~15度
      if @max_temp <= 15 && @min_temp >=5
        
      # 最高気温5度以下
    }

    # 雨の場合：防水靴、レインブーツ
    else current["weather"][0][id] < 600
    # 雪の場合：滑りにくい靴
  end

  def myself
  end
end
