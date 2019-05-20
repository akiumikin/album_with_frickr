class AlbumsController < ApplicationController
  before_action :set_album, only: [:edit, :update, :destroy]

  # GET /albums
  # GET /albums.json
  def index
    render template: 'layouts/application', layout: false
  end

  def list
    render json: Album.all
  end

  # GET /albums/1
  # GET /albums/1.json
  def show
    album = Album.includes(:album_images).find(params[:id])
    return_hash = album.attributes
    return_hash['album_images'] = album.album_images
    render json: return_hash
  end

  # POST /albums
  # POST /albums.json
  def create
    ActiveRecord::Base.transaction do
      @album = Album.create!(album_params)
      # ToDo 更新がn+1になっているのでactiverecord importを入れて修正する
      # https://github.com/zdennis/activerecord-import
      params[:urls].each do |image_url|
        AlbumImage.create!(album_id: @album.id, url: image_url)
      end
    end

    render json: @album
  end

  # DELETE /albums/1
  # DELETE /albums/1.json
  def destroy
    @album.destroy
    render json: @album
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_album
    @album = Album.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def album_params
    params.require(:album).permit(:name)
  end


  # ↓未使用（これから使う）

  # GET /albums/1/edit
  def edit
  end

  # PATCH/PUT /albums/1
  # PATCH/PUT /albums/1.json
  def update
    respond_to do |format|
      if @album.update(album_params)
        format.html { redirect_to @album, notice: 'Album was successfully updated.' }
        format.json { render :show, status: :ok, location: @album }
      else
        format.html { render :edit }
        format.json { render json: @album.errors, status: :unprocessable_entity }
      end
    end
  end
end
