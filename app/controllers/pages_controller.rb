class PagesController < ApplicationController
  def ai_final
      current = Weather.current
      
    # @current_weather = current["weather"][0]["description"]
    # @current_degree = current["main"]["temp"]
    @max_temp = current["main"]["temp_max"]
    @min_temp = current["main"]["temp_min"]
    @url = []
   @clothes = []
    # 女性の場合：ワンピースか上下か
    random = Random.new()
    if random.rand(1..2) == 1
      # ワンピース
      isOP = true;
    end


    # 晴れの場合
    # if current["weather"][0]["id"] > 700
      # 最低気温25以上

      # 気温15~25度

      # 気温5~20度
      if @max_temp <= 20
        if isOP
          op = Onepiece.select('id').group('type').having('(isWinter=?) OR (isFall=?)', true, true).order("RANDOM()").limit(1)
          @clothes.push(Onepiece.find(op[0].id))
          @url.push(Onepiece.find(op[0].id).image_url)
        else
          top1 = Top.select('id').group('type').having('(type=? OR type=?)', 'sweater', 'hoodie').order("RANDOM()").limit(1)
          bottom = Bottom.select('id').group('type').having('(isWinter=?) OR (isFall=?)', true, true).order("RANDOM()").limit(1)
          @clothes.push(Top.find(top1[0].id))
          @clothes.push(Bottom.find(bottom[0].id))
          @url.push(Top.find(top1[0].id).image_url)
          @url.push(Bottom.find(bottom[0].id).image_url)
        end
        if @min_temp <=13
          top2 = Top.select('id').group('type').having('(isWinter=?) AND (type=?)', true, 'outer').order("RANDOM()").limit(1)
          @clothes.push(Top.find(top2[0].id))
        end
      end
   
  #  render json: @url
  
  end

  def self_choose
  end

  def ai_casual


    @patterns = Pattern.all
    @images = []
    @patterns.each do |p|
      p.images.each do |i|
        url = Rails.application.routes.url_helpers.rails_blob_path(i, only_path: true)
        @images.push(url)
      end
    end
  end

  def outfits
  end

  def store
  end
end
